import { Router } from "express"
import { Admin } from "../middleware/admin"
import adminMiddleware from "../middleware/admin"
const router = Router()

router.post("/signup", async function(req,res){
    // write down the admin signup logic eyate
    const username = req.body.username
    const password = req.body.password

    // checking if users already exists
    await Admin.create({
        username:username,
        password:password
    })
    res.json({
        message:"Admin created successfully."
    })
})


export default router;