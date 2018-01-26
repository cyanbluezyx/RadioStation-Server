var express = require('express');
var router = express.Router();
var request = require('request');
var CONSTANT = require('../utils/constant')
require('../utils/util')

var User = require('./../modules/user')

/* GET users listing. */
router.get('/wxCode2Session', function(req, res, next) {
    const url = 'https://api.weixin.qq.com/sns/jscode2session'
    let params = {
        appid: CONSTANT.APP_ID,
        secret: CONSTANT.APP_SECRET,
        js_code: req.query.jsCode,
        grant_type: 'authorization_code'
    }
    request.post({
        url:url, 
        form: params,
        header: {
            'content-Type': 'application/x-www-form-urlencoded'
        },
        json:true
    }, (err, response, data) => {
        if(err){
            res.status(500).jsonp({error: err})
        }else{
            let userInfo = JSON.parse(req.query.userInfo).rawData
            //更新用户信息
            User.findOne({openid:data.openid},(err2,doc) => {
                if(err2){
                    res.json({
                        status : '1',
                        msg: err.message,
                        result: ''
                    })
                }else{
                    if(!doc){
                        //没有该用户，新增
                        let _ui = JSON.parse(userInfo)
                        _ui.openid = data.openid
                        User.create(_ui,(err3,doc2) => {
                            if(err3){
                                res.json({
                                    status : '1',
                                    msg: err.message,
                                    result: ''
                                })
                            }
                        })
                    }
                }
                let TIMESTAMP = new Date().Format('yyyyMMddhhmmss')
                let _random = Number.parseInt(Math.random() * 99).toString().padStart(2,'0')
                let sessionId = TIMESTAMP + _random;
                //存session 待研究
                //key sessionid value data.session_key + openid
                res.json({
                    status: '0',
                    msg: '',
                    result: data.openid
                })
            })
            
        }
    });
    
});

module.exports = router;
