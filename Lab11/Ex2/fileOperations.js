const fs = require('fs');

// 1. Create a new file
fs.writeFile('sample.txt', 'Hello! This file is created using Node.js.', (err) => {

    if (err) {
        console.log("Error creating file:", err);
        return;
    }

    console.log("File created successfully.");

    // 2. Read the file
    fs.readFile('sample.txt', 'utf8', (err, data) => {

        if (err) {
            console.log("Error reading file:", err);
            return;
        }

        console.log("File contents:");
        console.log(data);

        // 3. Append to the file
        fs.appendFile('sample.txt', '\nThis line was appended.', (err) => {

            if (err) {
                console.log("Error appending file:", err);
                return;
            }

            console.log("Data appended successfully.");

            // 4. Delete the file
            fs.unlink('sample.txt', (err) => {

                if (err) {
                    console.log("Error deleting file:", err);
                    return;
                }

                console.log("File deleted successfully.");

            });

        });

    });

});