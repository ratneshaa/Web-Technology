const express = require("express");
const mongoose = require("mongoose");
const Student = require("./models/Student");

const app = express();
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/lab12db")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));


// CREATE
app.post("/students", async (req, res) => {
    try {
        const student = await Student.create(req.body);
        res.json(student);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});


// READ
app.get("/students", async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});


// UPDATE
app.put("/students/:id", async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        );
        res.json(student);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});


// DELETE
app.delete("/students/:id", async (req, res) => {
    try {
        await Student.findByIdAndDelete(req.params.id);
        res.json({message:"Student deleted"});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});


app.listen(3000, () => {
    console.log("Server running on port 3000");
});