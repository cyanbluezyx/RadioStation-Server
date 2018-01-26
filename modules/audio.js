var mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
    "radioId": String,
    "title": String,
    "playCount": Number,
    "playLength": String,
    "uploadDate": String,
    "audioName": String,
    "author": String
}, {collection: "Audios"})

module.exports = mongoose.model('Audios',userSchema,"Audios");