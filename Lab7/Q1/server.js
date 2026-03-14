const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const client = new MongoClient("mongodb://127.0.0.1:27017");

let db;

async function connectDB(){
await client.connect();
db = client.db("studentNotesDB");
console.log("MongoDB Connected");
}

connectDB();

app.post("/notes", async(req,res)=>{

await db.collection("notes").insertOne(req.body);

res.send("Note Saved");

});

app.get("/notes", async(req,res)=>{

const notes = await db.collection("notes").find().toArray();

res.send(notes);

});

app.delete("/notes/:id", async(req,res)=>{

await db.collection("notes").deleteOne({
_id:new ObjectId(req.params.id)
});

res.send("Deleted");

});

app.listen(3000,()=>{
console.log("Server running on port 3000");
});