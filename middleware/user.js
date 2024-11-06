import { User } from "../database/index"
function userMiddleware(req,res,next){
    username : req.body.username
    password : req.body.password
    healthStatus : req.body.healthStatus
    description : req.body.description
}

User.findOne({
    username : username,
    password : password
})
.then(function(value){
   if(value){
    next()
   } else{
    res.status(403).json({
        message:"User does not exist."
    })
   }
}) 


export default userMiddleware