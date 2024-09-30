import userModel from "../models/userModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { sendEmail } from '../utils/email.js';
import { log } from "console";

// Access the environment variables using process.env
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;



// Function to sign the JWT token
const signToken = (id) => {
    return jwt.sign({ id }, JWT_SECRET, {
        expiresIn: JWT_EXPIRES_IN
    });
};

export const signup = async (req, res) => {
    const { userName, email, password } = req.body;
    try {
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already exists" });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        const newUser = new userModel({ userName, email, password: hashedPassword });
        await newUser.save();

        // Generate email verification token
        const verificationToken = jwt.sign({ email }, JWT_SECRET, { expiresIn: '7d' });

        // Send verification email
        const verifyUrl = `http://yourapp.com/verify-email/${verificationToken}`;
        await sendEmail(email, 'Verify your email', `Click here to verify: ${verifyUrl}`);

        res.status(201).json({ message: "User created! Please verify your email." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email });
        if (!user) return res.status(400).json({ message: "Invalid email or password" });

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid email or password" });

        // Generate JWT
        const token = signToken(user._id);

        res.status(200).json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

export const protect = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "No token provided" });

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded; // Attaching the decoded JWT payload to the request
        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid token" });
    }
};

export const restrictTo = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ message: "You do not have permission to access this route" });
        }
        next();
    };
};

export const forgotPassword = async (req, res) => {
    const { email } = req.body;
    try {
        const user = await userModel.findOne({ email });
        if (!user) return res.status(404).json({ message: "User not found" });

        // Generate a random reset token
        const resetToken = crypto.randomBytes(32).toString("hex");
        // console.log(resetToken);

        // Hash the token before saving it in the database
        const resetTokenHash = crypto.createHash("sha256").update(resetToken).digest("hex");
        // console.log(resetToken);

        // Save the hashed token and expiration date in the user model
        user.resetPasswordToken = resetTokenHash;
        user.resetPasswordExpires = Date.now() + 10 * 60 * 1000; // Token valid for 10 minutes
        await user.save({ validateBeforeSave: false });

        // Send reset token in the email (unhashed token)
        const resetUrl = `http://localhost:9000/api/user/reset-password/${resetToken}`;

        await sendEmail(email, 'Password reset', `Click here to reset your password: ${resetUrl}`);

        res.status(200).json({ message: "Password reset token sent!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};


export const resetPassword = async (req, res) => {
    const { token } = req.params;
    const { password } = req.body;

    try {
        // Hash the token provided by the user (from the URL)
        const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

        // Find the user by the hashed token and check if the token hasn't expired
        const user = await userModel.findOne({
            resetPasswordToken: hashedToken,
            resetPasswordExpires: { $gt: Date.now() },  // Ensure the token has not expired
        });

        if (!user) return res.status(400).json({ message: "Invalid or expired token" });

        // Update the password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        // Clear the reset token fields
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;
        await user.save();

        

        res.status(200).json({ message: "Password updated successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};


export const updatePassword = async (req, res) => {
    const { oldPassword, newPassword } = req.body;

    try {
        const user = await userModel.findById(req.user.id);

        // Check current password
        const isMatch = await bcrypt.compare(oldPassword, user.password);
        if (!isMatch) return res.status(400).json({ message: "Current password is incorrect" });

        // Hash new password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(newPassword, salt);
        await user.save();

        res.status(200).json({ message: "Password updated successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};
