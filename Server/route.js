const express=require("express");
const route=express.Router();

const {fileupload}=require("./controllers/fileuploadcontroller");
const {filestream}=require("./controllers/streamcontroller");

route.post("/fileupload",fileupload);
route.post("/stream",filestream);
module.exports=route

