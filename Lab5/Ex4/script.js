let inventory = [];

function loadInventory() {
    fetch("inventory.json")
        .then(response => response.json())
        .then(data => {
            inventory = data;
            displayInventory(inventory);
        })
        .catch(error => {
            document.getElementById("message").innerHTML = "Error loading JSON file!";
        });
}

function displayInventory(data) {

    let table = document.getElementById("inventoryTable");

    table.innerHTML = `
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Action</th>
        </tr>
    `;

    let total = 0;

    data.forEach((product, index) => {

        total += product.price * product.stock;

        let stockColor = product.stock < 3 ? "red" : "black";

        let row = table.insertRow();

        row.innerHTML = `
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.category}</td>
            <td>${product.price}</td>
            <td style="color:${stockColor}">${product.stock}</td>
            <td>
                <button onclick="editProduct(${index})">Edit</button>
                <button onclick="deleteProduct(${index})">Delete</button>
            </td>
        `;
    });

    document.getElementById("totalValue").innerHTML =
        "Total Inventory Value: ₹ " + total;
}

function addProduct() {

    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let category = document.getElementById("category").value;
    let price = document.getElementById("price").value;
    let stock = document.getElementById("stock").value;

    if (!id || !name || !category || !price || !stock) {
        document.getElementById("message").innerHTML = "All fields are required!";
        return;
    }

    inventory.push({
        id: parseInt(id),
        name: name,
        category: category,
        price: parseFloat(price),
        stock: parseInt(stock)
    });

    document.getElementById("message").innerHTML = "Product Added Successfully!";
    displayInventory(inventory);
}

function editProduct(index) {

    let product = inventory[index];

    document.getElementById("id").value = product.id;
    document.getElementById("name").value = product.name;
    document.getElementById("category").value = product.category;
    document.getElementById("price").value = product.price;
    document.getElementById("stock").value = product.stock;

    inventory.splice(index, 1);

    document.getElementById("message").innerHTML =
        "Edit details and click Add again.";
}

function deleteProduct(index) {

    inventory.splice(index, 1);

    document.getElementById("message").innerHTML = "Product Deleted!";
    displayInventory(inventory);
}

function searchProduct() {

    let category = document.getElementById("searchCategory").value;

    let filtered = inventory.filter(product =>
        product.category.toLowerCase() === category.toLowerCase()
    );

    if (filtered.length === 0) {
        document.getElementById("message").innerHTML =
            "No products found in this category!";
        return;
    }

    displayInventory(filtered);
}
