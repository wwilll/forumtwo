const api = require('./api')
const fs = require('fs');// 引入文件模块
const path = require('path');// 引入处理路径的模块
//post请求引入body-parser 中间件，用于处理 JSON, Raw, Text 和 URL 编码的数据
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
//下面两行为bodyParser大部分使用场景
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/forumdb"; //连接到forumdb数据库
// app.all('*', function(req, res, next) {  
//     res.header("Access-Control-Allow-Origin", "*");  
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");  
//     res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");  
//     res.header("X-Powered-By",' 3.2.1')  
//     res.header("Content-Type", "application/json;charset=utf-8");  
//     next();  
// });
app.use(api)
// app.get("/get",function(req,res){
//     // console.log("请求url：",req.path,typeof req.path,req.path.toString())
//     // console.log("请求参数：",req.query,typeof req.query,JSON.stringify(req.query))
//     // console.log("请求id：",req.query.id,typeof req.query.id,req.query.id.toString())
//     res.send("这是get请求<br>"+"请求url："+req.path+"<br>请求参数："+JSON.stringify(req.query)+"<br>请求id："+req.query.id);
//     //res.send(req.query); //浏览器接收到字符串
// })
// 访问静态资源文件 这里是访问所有dist目录下的静态资源文件
app.use(express.static(path.resolve(__dirname, '../dist')))
app.get('*', function(req, res) {
    const html = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf-8')
    res.send(html)
})
const hostName = '127.0.0.1';
const port = 3000;
app.listen(port,hostName,function(){
   console.log(`服务器运行在http://${hostName}:${port}`);
});