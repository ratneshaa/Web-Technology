const api = "http://localhost:3000/notes";

function addNote(){

let note = {
title: document.getElementById("title").value,
subject: document.getElementById("subject").value,
description: document.getElementById("description").value
};

fetch(api,{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(note)
})
.then(()=>loadNotes());

}

function loadNotes(){

fetch(api)
.then(res=>res.json())
.then(data=>{

let html="";

data.forEach(note=>{

html+=`
<div>
<h3>${note.title}</h3>
<p>${note.subject}</p>
<p>${note.description}</p>

<button onclick="deleteNote('${note._id}')">Delete</button>
</div>
<hr>
`;

});

document.getElementById("notes").innerHTML=html;

});

}

function deleteNote(id){

fetch(api+"/"+id,{
method:"DELETE"
})
.then(()=>loadNotes());

}

loadNotes();