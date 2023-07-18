const express = require("express");
const hbs = require("hbs");
const path = require("path");
const app = express();

require("./db/connection");
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();
const port = process.env.PORT || 3000;

const static_path = path.join(__dirname,"/public");
const template_path = path.join(__dirname,"/template/views");
const partials_path = path.join(__dirname,"/template/partials");
const formmodel = require("./db/formschema");
app.set("view engine","hbs");
app.set("views",template_path);
hbs.registerPartials(partials_path);


app.use(express.static(static_path));
app.use(express.json());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(upload.array()); 


app.get("/signup",(req,res)=>{
    res.render("index");
});

app.post("/signup",async (req,res)=>{
    
    const docs = new formmodel(req.body);
    const data = await docs.save();
    console.log(data);
    res.send("submited");
});

app.get("/login",(req,res)=>{
    res.render("login");
});

app.get("/admin/user",(req,res)=>{
    res.render("user");
})

app.get("/admin",(req,res)=>{
    res.render("admin");
})


app.get("/api/data",async(req,res)=>{
    const data = await formmodel.find({}).select({_id:0,__v:0});
    res.json(data);
})


app.listen(port,()=>{
    console.log("port no",port);
});