// // started os process
// console.log('first');
// setTimeout(() => {
//   console.log('second')
// }, 0)
// console.log('third')
// // completed and exited os process

// setInterval(() => {
//   console.log('hello world') // asynchronous actions are offloaded
// }, 2000)
// console.log('This is some code') // this runs first.
// // process stays alive unless ctrl + c or error

const http = require("http");

const server = http.createServer((req, res) => {
	console.log("Request event");
	res.end("Hello Wordl");
});

server.listen(5000, () => {
	console.log("Server is listening on port 5000");
});
