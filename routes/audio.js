var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Audio = require('../modules/audio')

router.get('/', function(req, res, next) {
    //res.jsonp({ user: 'tobi' })
});

router.get('/getAudioList', (req, res, next) => {
    Audio.find({
        author : req.query.author
    },(err, audioDoc) => {
        if(err){
            res.json({
                status : '1',
                msg: err.message,
                result: ''
            })
        }else{
            res.json({
                status : '0',
                msg: '',
                result: audioDoc
            })
        }
    })
})

module.exports = router;