// streams
// 4 types of streams
// Readable stream
// Writable stream
// Duplex stream
// Transform stream

// when we are reaeding a file, we store it in variable (main memory)
// this is bad if file is too large

const { error } = require("console");
const { createReadStream } = require("fs");

const stream = createReadStream("./content/big.txt", {
	highWaterMark: 90000,
	encoding: "utf8",
}); // options object. // highwatermark - chunk size == 90000bytes = 90kb

stream.on("data", (result) => {
	// result is chunk size // data is event name (built in event)
	console.log(result);
});

stream.on("error", (err) => {
	console.log(err);
});
