// const http = require("http");
// const { readFileSync, read } = require("fs");

// http.createServer((req, res) => {
// 	const text = readFileSync("./content/big.txt", "utf-8");
// 	res.end(text);
// }).listen(5000);

// Problem with above code... large file is sent...

const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
  const fileStream = fs.createReadStream("./content/big.txt", "utf8");
  fileStream.on("open", () => {
    fileStream.pipe(res); // writes data in chunk
  });

  fileStream.on("error", (err) => {
    res.end(err);
  });
}).listen(5000);
