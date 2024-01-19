const express = require("express");
const router = express.Router();
const Note = require("../models/note")

router.get("/list",async function(req,res){
    var notes = await Note.find({userid: req.body.userid});
    res.json(notes);
});

router.post("/add",async function(req,res){

    await Note.deleteOne({id: req.body.id})
   
     const newNote = new Note({
        id: req.body.id,
        userid: req.body.userid,
        title: req.body.title,
        content: req.body.content,
    })
    await newNote.save();
    const responce = {message: "New note created!" + `id: ${req.body.id}`};
    res.json(responce);
});

router.post("/delete",async function(req,res){
    await Note.deleteOne({id: req.body.id});
    const responce = {message: "Note deleted!" + `id: ${req.body.id}`};
    res.json(responce);
});

module.exports = router; 