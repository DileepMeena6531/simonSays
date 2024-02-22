const express=require("express");
const mongoose=require("mongoose");
const app=express();
const path=require("path");
require('dotenv').config();

const dbURL=process.env.ATLASDB_URL;

main().then(()=>{
    console.log("connected to DB");
}).catch(err=> console.log(err));

async function main(){
    await mongoose.connect(dbURL); 
}

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"/public"))); 

app.get("/",(req,res)=>{
    res.render("index.ejs");
})

app.listen(8080,(req,res)=>{
    console.log("server is listening port 8080");
})

