import blogModel from "../models/blogModel.js";
import fs from 'fs'

const addBlog = async (req, res) => {
    try {
        const { title, description, category, author } = req.body;

        

        // Access uploaded files from req.files
        const image = req.files['image'] ? req.files['image'][0].filename : null;
        const authorImg = req.files['authorImg'] ? req.files['authorImg'][0].filename : null;

        const newBlog = new blogModel({
            title,
            description,
            category,
            author,
            image,
            authorImg,
        });

        await newBlog.save();
        res.status(201).json({ message: "Blog added successfully", blog: newBlog });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};


const listBlog = async (req, res) => {
    try {
        const blogs = await blogModel.find({})
        res.json({ success: true, data: blogs })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}


const removeBlog = async (req, res) => {
    try {
        // Find the blog by ID
        const blog = await blogModel.findById(req.body.id);
        
        // Remove both the blog image and author image
        if (blog.image) {
            fs.unlink(`uploads/${blog.image}`, (err) => {
                if (err) console.log("Error removing image:", err);
            });
        }

        if (blog.authorImg) {
            fs.unlink(`uploads/${blog.authorImg}`, (err) => {
                if (err) console.log("Error removing author image:", err);
            });
        }

        // Delete the blog from the database
        await blogModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Blog Removed" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
}


export { addBlog, listBlog, removeBlog }