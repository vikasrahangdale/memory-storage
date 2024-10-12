
const express = require('express');
const app = express();
const upload = require("./config/multer");
const path = require('path');
const userModel = require('./models/user-model');
const mongoose = require('mongoose');


app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.render('index');
});


app.post('/upload', upload.single('image'), async (req, res) => {
   let user = await userModel.create({
      username: req.body.username,
      image:req.file.buffer,
    });
    console.log(req.file)
    const mimeType = req.file.mimeType;
    res.render("upload",{user,mimeType});
 
});

// app.get("/image",upload.single("image"),async (req,res)=>{
//   let user = await user.find();
// })


 app.listen("3000")