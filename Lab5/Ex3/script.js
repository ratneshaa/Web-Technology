let students = [];

function loadStudents() {
    fetch("students.json")
        .then(response => response.json())
        .then(data => {
            students = data;
            displayStudents();
        })
        .catch(error => {
            document.getElementById("message").innerHTML = "Error loading JSON file!";
        });
}

function displayStudents() {
    let table = document.getElementById("studentTable");

    table.innerHTML = `
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Course</th>
            <th>Marks</th>
            <th>Action</th>
        </tr>
    `;

    if (students.length === 0) {
        document.getElementById("message").innerHTML = "No Students Found!";
        return;
    }

    students.forEach((student, index) => {
        let row = table.insertRow();

        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.course}</td>
            <td>${student.marks}</td>
            <td>
                <button onclick="editStudent(${index})">Edit</button>
                <button onclick="deleteStudent(${index})">Delete</button>
            </td>
        `;
    });
}

function addStudent() {

    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let course = document.getElementById("course").value;
    let marks = document.getElementById("marks").value;

    if (!id || !name || !course || !marks) {
        document.getElementById("message").innerHTML = "All fields are required!";
        return;
    }

    students.push({
        id: parseInt(id),
        name: name,
        course: course,
        marks: parseInt(marks)
    });

    document.getElementById("message").innerHTML = "Student Added Successfully!";
    displayStudents();
}

function editStudent(index) {

    let student = students[index];

    document.getElementById("id").value = student.id;
    document.getElementById("name").value = student.name;
    document.getElementById("course").value = student.course;
    document.getElementById("marks").value = student.marks;

    students.splice(index, 1);

    document.getElementById("message").innerHTML = "Edit the details and click Add again.";
}

function deleteStudent(index) {
    students.splice(index, 1);

    document.getElementById("message").innerHTML = "Student Deleted!";
    displayStudents();
}
