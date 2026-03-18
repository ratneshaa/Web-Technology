const student = {
    id: 101,
    name: "Priya",
    department: "CSE",
    marks: 92
};

const {id, name, department, marks} = student;

const updatedStudent = {
    ...student,
    grade: "A"
};

document.getElementById("output").innerHTML =
    `ID: ${id} <br>
     Name: ${name} <br>
     Department: ${department} <br>
     Marks: ${marks} <br><br>
     Updated Object: ${JSON.stringify(updatedStudent)}`;