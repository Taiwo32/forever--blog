import userModel from "../models/userModel.js";


const getAllUsers = async (req,res) =>{
    try {
        const users = await userModel.find({})
        res.status(200).json({
            status: 'success',
            result: users.length,
            data: {
                users
            }
        })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}

const removeUser = async (req, res, next) => {
    try {
        const user = await userModel.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ success: false, message: "No user found with that ID" });
        }
        await userModel.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status: "success",
            data: null,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error deleting user" });
    }
};


export { getAllUsers, removeUser }