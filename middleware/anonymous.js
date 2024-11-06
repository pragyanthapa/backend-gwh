import { Anonymous } from "../database/index"
function anonymousMiddleware(req,res,next){
    // from the schema defined in the anonymous database in the file index.js of database folder
}

Anonymous.findOne({
    // from the schema defined
})
.then(function(value){
    if(value){
        next()
    } else{
        res.status(403).json({
            message:"It do not exist"
        })
    }
})

export default anonymousMiddleware