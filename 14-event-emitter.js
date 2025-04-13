const EventEmitter = require("events");

const customEmitter = new EventEmitter(); // object of class

// listen for event 'response'
customEmitter.on("response", (name, id) => {
	// response is a string (name)
	console.log(`data received ${name} with id ${id}`);
});

customEmitter.on("response", () => {
	// response is a string (name)
	console.log(`Some other logic here `);
});

customEmitter.emit("response", "john", 34); // we can have multiple events listening.
