let xmlDoc;

function loadEmployees() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "employees.xml", true);

    xhr.onload = function() {
        if (this.status == 200) {
            xmlDoc = this.responseXML;

            if (!xmlDoc) {
                document.getElementById("message").innerHTML = "Malformed XML!";
                return;
            }

            displayEmployees();
        }
    };
    xhr.send();
}

function displayEmployees() {
    let table = document.getElementById("empTable");
    table.innerHTML = "<tr><th>ID</th><th>Name</th><th>Department</th><th>Salary</th><th>Action</th></tr>";

    let employees = xmlDoc.getElementsByTagName("employee");

    if (employees.length == 0) {
        document.getElementById("message").innerHTML = "No Employees Found!";
        return;
    }

    for (let i = 0; i < employees.length; i++) {
        let id = employees[i].getElementsByTagName("id")[0].textContent;
        let name = employees[i].getElementsByTagName("name")[0].textContent;
        let dept = employees[i].getElementsByTagName("department")[0].textContent;
        let salary = employees[i].getElementsByTagName("salary")[0].textContent;

        let row = table.insertRow();
        row.innerHTML =
            `<td>${id}</td>
             <td>${name}</td>
             <td>${dept}</td>
             <td>${salary}</td>
             <td>
                <button onclick="deleteEmployee(${i})">Delete</button>
             </td>`;
    }
}

function addEmployee() {
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let dept = document.getElementById("dept").value;
    let salary = document.getElementById("salary").value;

    if (!id || !name || !dept || !salary) {
        document.getElementById("message").innerHTML = "All fields required!";
        return;
    }

    let newEmp = xmlDoc.createElement("employee");

    newEmp.innerHTML =
        `<id>${id}</id>
         <name>${name}</name>
         <department>${dept}</department>
         <salary>${salary}</salary>`;

    xmlDoc.getElementsByTagName("employees")[0].appendChild(newEmp);

    document.getElementById("message").innerHTML = "Employee Added Successfully!";
    displayEmployees();
}

function deleteEmployee(index) {
    let employees = xmlDoc.getElementsByTagName("employee");
    employees[index].remove();
    document.getElementById("message").innerHTML = "Employee Deleted!";
    displayEmployees();
}
