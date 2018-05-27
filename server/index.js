const fs = require('fs');// 引入文件模块
const path = require('path');// 引入处理路径的模块
//post请求引入body-parser 中间件，用于处理 JSON, Raw, Text 和 URL 编码的数据
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
//下面两行为bodyParser大部分使用场景
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/forumdb"; //连接到forumdb数据库
app.all('*', function(req, res, next) {  
    res.header("Access-Control-Allow-Origin", "*");  
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");  
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");  
    res.header("X-Powered-By",' 3.2.1')  
    res.header("Content-Type", "application/json;charset=utf-8");  
    next();  
});
app.get("/checkid",function(req,res){
    var ua=req.query.account;
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo=db.db("forumdb");
        dbo.collection("userinfo").find({"id":ua}).toArray(function(err,result){
            if(err) throw err;
            if(result.length==0){
                var ap={"status":0,"dec":"no such account"}
                res.send(ap);
            }else{
                var ap={"status":1,"dec":"this account exist","role":result[0].role}
                res.send(ap);
            }
            db.close();
        })  
    })
})
app.get("/checkuser",function(req,res){
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo=db.db("forumdb");
        dbo.collection("userinfo").find({},{id:1,role:1}).toArray(function(err,result){
            if(err) throw err;
            if(result.length==0){
                var ap={"status":0,"dec":"no user"}
                res.send(ap);
            }else{
                var ap={"status":1,"result": result}
                res.send(ap);
            }
            db.close();
        })  
    })
})
app.get("/login",function(req,res){
    var ua=req.query.account;
    var up=req.query.password;
    var isexist={"id":ua}
    var logininfo={"id":ua,"pwd":up}
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo=db.db("forumdb");
        dbo.collection("userinfo").find(logininfo).toArray(function(err,result){
            if(err) throw err;
            if(result.length==0){
                var ap={"status":0,"dec":"no such account","account":ua}
                res.send(ap);
            }else{
                var ap={"status":1,"dec":"login success","account":ua,"role":result[0].role,"avatar":result[0].avatar || null}
                res.send(ap);
            }
            db.close();
        })  
    })
})
app.get("/getposts",function(req,res){
    var ua=req.query.account;
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo=db.db("forumdb");
        dbo.collection("postings").find({"account":ua}).sort({"timepoint":-1}).toArray(function(err,result){
            if(err) throw err;
            if(result.length == 0){
                var ap={"status":0,"dec":"no datas","u":ua}
                res.send(ap);
            }else{
                var ap={"status":1,"result":result}
                res.send(ap);
            }
            db.close();
        })  
    })
})
app.get("/allpostings",function(req,res){
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo=db.db("forumdb");
        dbo.collection("postings").find().sort({"timepoint":-1}).toArray(function(err,result){
            if(err) throw err;
            if(result.length == 0){
                var ap={"status":0,"dec":"no datas"}
                res.send(ap);
            }else{
                res.send(result);
            }
            db.close();
        })  
    })
})
app.post("/register",function(req,res){
    var ua=req.body.account;
    var up=req.body.password;
    var avatar=req.body.avatar;
    var ur='general';
    var isexist={"id":ua}
    var reginfo={"id":ua,"pwd":up,"role":ur,"avatar":avatar}
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo=db.db("forumdb");
        dbo.collection("userinfo").find(isexist).toArray(function(err,result){
            if(err) throw err;
            if(result.length==0){
                dbo.collection("userinfo").insert(reginfo)
                var ap={"status":1,"dec":"register success","account":ua,"role":ur,"avatar":avatar}
                res.send(ap);
            }else{
                var ap={"status":0,"dec":"account exist","account":ua}
                res.send(ap);
            }
            db.close();
        })  
    })
})
app.post("/posting",function(req,res){
    var account=req.body.account;
    var userrole=req.body.userrole;
    var time=req.body.time;
    var timepoint=req.body.timepoint;
    var title=req.body.title;
    var subtitle=req.body.subtitle;
    var content=req.body.content;
    var postprop=req.body.postprop
    var avatar=req.body.avatar
    var comment=req.body.comment
    var zan=req.body.zan
    var review=req.body.review
    var postinfo={"account":account,"userrole":userrole,"time":time,"timepoint":timepoint,"title":title,"subtitle":subtitle,"content":content,"postprop":postprop,"avatar":avatar,"comment":comment,"zan":zan,"review":review}
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo=db.db("forumdb");
        dbo.collection("postings").insert(postinfo)
        var ap={"status":1,"dec":"post success","r":userrole}
        res.send(ap);
        db.close();
    })
})
app.post("/deleteuser",function(req,res){
    var ua=req.body.id;
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo=db.db("forumdb");
        dbo.collection("userinfo").remove({'id':ua})
        var ap={"status":1,"dec":"delete success","account":ua}
        res.send(ap);
        db.close();
    })
})
app.post("/deletepost",function(req,res){
    var timepoint=req.body.timepoint;
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo=db.db("forumdb");
        dbo.collection("postings").remove({'timepoint':timepoint})
        var ap={"status":1,"dec":"delete success","timepoint":timepoint}
        res.send(ap);
        db.close();
    })
})
app.post("/changerole",function(req,res){
    var ua=req.body.id;
    var ur=req.body.role;
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo=db.db("forumdb");
        dbo.collection("userinfo").update({'id':ua},{$set:{'role':ur}})
        var ap={"status":1,"dec":"updata success","account":ua}
        res.send(ap);
        db.close();
    })
})
app.post("/addreview",function(req,res){
    let ut=req.body.timepoint;
    let ua=req.body.userid;
    let rc=req.body.reviewcontent;
    let c=req.body.comment;
    c++;
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo=db.db("forumdb");
        dbo.collection("postings").update({'timepoint':ut},{$push:{"review":{"id":ua,"rew":rc}},$set:{comment:c}})
        var ap={"status":1,"dec":"review success","ur":ua + "-" + rc}
        res.send(ap);
        db.close();
    })
})
app.post("/addzan",function(req,res){
    let ut=req.body.timepoint;
    let uz=req.body.zan;
    uz++;
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo=db.db("forumdb");
        dbo.collection("postings").update({'timepoint':ut},{$set:{zan:uz}})
        var ap={"status":1,"dec":"review success"}
        res.send(ap);
        db.close();
    })
})
const hostName = '127.0.0.1';
const port = 3000;
app.listen(port,hostName,function(){
   console.log(`服务器运行在http://${hostName}:${port}`);
});