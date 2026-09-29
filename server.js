 
 //let http = require ("http");
 
 //let server = http.createServer((req,res)=>{
    //console.log("hii");

   // res.end("ok get it");
 //});

 //server.listen(3000,()=>{
   // console.log("server on hai")
 //})


 const express = require("express");

 const app = express();

 app.get("/",(req,res)=>{
   res.send("ok got it");
 });

 app.listen(3000,()=>{
   console.log("server is running on port no 3000")
 })