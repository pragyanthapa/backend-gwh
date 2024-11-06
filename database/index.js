const mongoose = require("mongoose")
mongoose.connect("the-mongodb-url")

const AdminSchema = new mongoose.Schema({
    // add koridiyok aru ki ki lage saar
    username: String,
    password: String
})

const UserSchema = new mongoose.Schema({
    // add koridiyok saar
    username : String,
    password : String,
    healthStatus : String,
    description : String
})

const AnonymousData = new mongoose.Schema({
    // anonymously add kori diyok saar
})

const Admin = mongoose.model('Admin', AdminSchema)
const User = mongoose.model('User', UserSchema)
const Anonymous = mongoose.model('Anonymous', AnonymousData)

module.exports({
    Admin,
    User,
    Anonymous
})
