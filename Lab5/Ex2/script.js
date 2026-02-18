let xmlDoc;

function loadBooks() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "books.xml", true);

    xhr.onload = function() {
        if (this.status == 200) {
            xmlDoc = this.responseXML;

            if (!xmlDoc) {
                document.getElementById("message").innerHTML = "Malformed XML!";
                return;
            }

            displayBooks();
        }
    };
    xhr.send();
}

function displayBooks() {
    let table = document.getElementById("bookTable");

    table.innerHTML = `
        <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Status</th>
            <th>Action</th>
        </tr>
    `;

    let books = xmlDoc.getElementsByTagName("book");

    if (books.length == 0) {
        document.getElementById("message").innerHTML = "No Books Found!";
        return;
    }

    for (let i = 0; i < books.length; i++) {

        let id = books[i].getElementsByTagName("id")[0].textContent;
        let title = books[i].getElementsByTagName("title")[0].textContent;
        let author = books[i].getElementsByTagName("author")[0].textContent;
        let status = books[i].getElementsByTagName("status")[0].textContent;

        let row = table.insertRow();

        row.innerHTML = `
            <td>${id}</td>
            <td>${title}</td>
            <td>${author}</td>
            <td>${status}</td>
            <td>
                <button onclick="updateStatus(${i})">Toggle Status</button>
                <button onclick="deleteBook(${i})">Delete</button>
            </td>
        `;
    }
}

function addBook() {

    let id = document.getElementById("bookId").value;
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let status = document.getElementById("status").value;

    if (!id || !title || !author) {
        document.getElementById("message").innerHTML = "All fields are required!";
        return;
    }

    let newBook = xmlDoc.createElement("book");

    newBook.innerHTML = `
        <id>${id}</id>
        <title>${title}</title>
        <author>${author}</author>
        <status>${status}</status>
    `;

    xmlDoc.getElementsByTagName("library")[0].appendChild(newBook);

    document.getElementById("message").innerHTML = "Book Added Successfully!";
    displayBooks();
}

function updateStatus(index) {
    let books = xmlDoc.getElementsByTagName("book");
    let statusNode = books[index].getElementsByTagName("status")[0];

    if (statusNode.textContent === "Available") {
        statusNode.textContent = "Not Available";
    } else {
        statusNode.textContent = "Available";
    }

    document.getElementById("message").innerHTML = "Status Updated!";
    displayBooks();
}

function deleteBook(index) {
    let books = xmlDoc.getElementsByTagName("book");
    books[index].remove();

    document.getElementById("message").innerHTML = "Book Deleted!";
    displayBooks();
}
