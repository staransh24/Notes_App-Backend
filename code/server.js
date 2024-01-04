const express = require("express");

const dotenv = require("dotenv").config();

const app = express();

const Note = require('./models/note');

const Port = process.env.PORT || 2400;

const mongoose = require("mongoose");

const bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

const connectionString = "mongodb+srv://staransh24:" + encodeURIComponent("Ak@240203") + "@notesapp.mrknwio.mongodb.net/NotesDB";

mongoose.connect(connectionString).then(function () {
    
app.get('/', function (req, res) {
    const response = { message: "API Works!"};
    res.json(response);
});

const noteRouter = require("./routes/noteRoutes");
app.use("/notes",noteRouter);

app.listen(Port,  () => {
    console.log(`Server started on Port: ${Port}`);
});    
});



