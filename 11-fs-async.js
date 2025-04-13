const { readFile, writeFile } = require("fs");

console.log("start");
readFile("./content/first.txt", "utf8", (err, result) => {
	if (err) {
		console.log(err);
		return;
	}

	const first = result;
	readFile("./content/second.txt", "utf8", (err, result) => {
		if (err) {
			console.log(err);
			return;
		}

		const second = result;

		writeFile(
			"./content/result-sync.txt",
			`Here is the result: ${first}, ${second}`,
			(err, result) => {
				if (err) {
					console.log(err);
					return;
				}

				console.log("Done with this task"); // this will be executed at last
			}
		);
	});
});

console.log("Starting next task"); // this statement will run before the callback 
// Callback hell .|.


// it is similar to threads but a little different. 
// This syntax is a bit messy

// Js reads this code synchronously, reads it line by line and runs it
// This is blocking code 
// If any statement takes too long, it will block the rest of the code
// This is not good
// This is fixed by asynchrous code and methods