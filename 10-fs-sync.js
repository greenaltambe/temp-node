// readFileSynce is a method
const { readFileSync, writeFileSync } = require("fs");
console.log("start");

const first = readFileSync("./content/first.txt", "utf8"); // utf8 is encoding (default)
const second = readFileSync("./content/second.txt", "utf8");

console.log(first, second);

// if file does not exist, it will be created
// if file exists, it will be overwritten
writeFileSync(
	"./content/result-sync.txt",
	`Here is the result: ${first}, ${second}`,
	{ flag: "a" }
); // a = append // flag is optional


console.log('Done with this task');
console.log('Starting next task');

// Js reads this code synchronously, reads it line by line and runes it
// This is blocking code 
// If any statement takes too long, it will block the rest of the code
