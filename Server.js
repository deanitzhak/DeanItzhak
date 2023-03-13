const express = require('express');
const mongoose = require("mongoose");
const app = express();
const port  = 3000;
const uri = "mongodb+srv://DeanItzhak:Deaniwini1990@deanitzhak.gfymber.mongodb.net/DeanItzhak";
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
//******//
const noteSchema = {
    name: String,
    email: String,
    subject:String,
    messeage:String
}
const Node = mongoose.model("Note",noteSchema);



async function connect(){
    try{
        await mongoose.connect(uri);
        console.log("connected to Mongoose");
    }catch(error){
        console.log(error+'');
    }
}
connect();
//******/
//static files
app.use(express.static('public'));
app.use('js/',express.static(__dirname+'public/js'));
app.use('css/',express.static(__dirname+'public/css'));
app.use('images/',express.static(__dirname+'public/images'));
app.use(express.urlencoded({extended:false}))

app.get('',(req,res)=>{
    res.sendFile(__dirname+'/view/index.html');
})

app.post("/",function (req,res){
    let newNode = new Node({
        name:req.body.name,
        email:req.body.email,
        subject:req.body.subject,
        messeage:req.body.messeage
    })
    newNode.save();
    res.redirect("/");
});

app.listen(port, ()=> console.log('Listening on port',port));