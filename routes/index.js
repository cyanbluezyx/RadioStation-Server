var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

//,{useMongoClient:true}
//mongoose.connect('mongodb://zhaiyx:joker123@127.0.0.1:27017/LiDaShanFM');
mongoose.connect('mongodb://116.62.147.233:37017/LiDaShanFM');
//mongoose.connect('mongodb://127.0.0.1:27017/dumall',{useMongoClient:true});

mongoose.connection.on("connected",() =>{
    console.log("mongodb connected success.");
});

mongoose.connection.on("error",() =>{
    console.log("mongodb connected error.");
});

mongoose.connection.on("disconnected",() =>{
    console.log("mongodb connected disconnected.");
});

/* GET home page. */
router.get('/', function(req, res, next) {
    res.jsonp({ user: 'tobi' })
});

module.exports = router;
