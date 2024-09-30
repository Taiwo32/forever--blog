import express from 'express'
import {addBlog, listBlog, removeBlog} from '../controllers/blogController.js'
import multer from 'multer'

const blogRouter = express.Router();

const storage = multer.diskStorage({
    destination: "uploads",
    filename:(req,file,cb)=>{
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

blogRouter.post("/add",upload.fields([{name:'image',maxCount:1},{name: 'authorImg',maxCount:1}]),addBlog)
blogRouter.get("/list", listBlog)
blogRouter.post("/remove", removeBlog)





export default blogRouter;