const EventEmitter = require('events');

// Create event emitter object
const eventEmitter = new EventEmitter();

// First listener
eventEmitter.on('greet', (name) => {
    console.log("Hello " + name + ", welcome to Node.js events!");
});

// Second listener for same event
eventEmitter.on('greet', (name) => {
    console.log("Event received successfully for " + name);
});

// Another custom event
eventEmitter.on('bye', (name) => {
    console.log("Goodbye " + name + ", see you later!");
});

// Trigger events
eventEmitter.emit('greet', 'Student');
eventEmitter.emit('bye', 'Student');