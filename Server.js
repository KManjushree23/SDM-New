var express=require('express');
var app=express();
app.use(express.static('public'))
// app.get("/",(req, res)=>{res.send("Welcome to  IET");});
app.get("/product",(req, res)=>{res.send("Welcome....") });
app.listen(8000);
console.log("App is listening on port 8000");