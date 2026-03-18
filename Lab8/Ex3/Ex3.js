class Course {
    constructor(courseName, instructor) {
        this.courseName = courseName;
        this.instructor = instructor;
    }

    displayCourse() {
        return `Course: ${this.courseName}, Instructor: ${this.instructor}`;
    }
}

let course1 = new Course("Web Technologies", "Dr. Kumar");

let enrollCourse = new Promise((resolve, reject) => {
    let seatsAvailable = true;

    if (seatsAvailable)
        resolve("Enrollment Successful");
    else
        reject("Course Full");
});

enrollCourse
    .then(msg => {
        document.getElementById("output").innerHTML =
            `${course1.displayCourse()} <br> ${msg}`;
    })
    .catch(err => {
        document.getElementById("output").innerHTML = err;
    });