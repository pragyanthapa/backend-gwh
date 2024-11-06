import { Admin } from "../database/index"
function adminMiddleware(req,res,next){
    const username = req.headers.username
    const password = req.headers.password
    // aru zodi kiba add kore database ot, eyat add koridibo
}
Admin.findOne({
    username : username,
    password : password
})
.then(function(value){
    if(value){
        next()
    } else{
        res.status(403).json({
            message:"Admin does not exist."
        })
    }
})

export default adminMiddleware;
