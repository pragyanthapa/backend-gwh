import { Router } from "express"
import userMiddleware from "../middleware/user"
const router = Router()

router.post("/signup",function(req,res){
   const username = req.body.username
   const password = req.body.password
   User.create({
    username,
    password
   })
   res.json({
    message:"User created successfully."
   })
})

export default router