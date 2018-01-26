var mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
    "openid" : String,
    "avatarUrl" : String,
    "city" : String,
    "country" : String,
    "gender" : Number,
    "language" : String,
    "nickName" : String,
    "province" : String
}, {collection: "User"})

module.exports = mongoose.model('Users',userSchema,"User");