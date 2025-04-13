// const http = require('http')

// const server = http.createServer((req, res) => {
//   if (req.url === '/') {
//     res.end('Home Page')
//   }

//   if (req.url === '/about') {
//     // BLOCKING CODE
//     for (let i = 0; i < 1000; i++) {
//       for (let j = 0; j < 1000; j++) {
//         console.log(`${i} ${j}`);
//       }
//     }
//     res.end('About page')
//   }

//   res.end('Error page')
// });

// server.listen(5000, () => {
//   console.log('Server is Listening on port 5000...')
// });

// Above code blocks

// Better version of 11-fa-sync

// const { readFile } = require('fs');
// const { result } = require('lodash');

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile('./content/first.txt', 'utf-8', (err, data) => {
//       if (err) {
//         reject(err);
//       }
//       else {
//         resolve(data);
//       }
//     });
//   })
// }

// getText( `./content/first.txt`).then(result=> console.log(result)).catch((err)=> console.log(err))

// ====================================================================================================

// Best version using async await

// const { readFile, writeFile } = require("fs")
// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// const start = async () => {
// 	try {
// 		const first = await readFilePromise("./content/first.txt", "utf-8");
// 		const second = await readFilePromise("./content/second.txt", "utf-8");
// 		console.log(first, second);
// 		await writeFilePromise(
// 			"./content/result-mind-grenade.txt",
// 			`This is awesone: ${first}, ${second}`
// 		);
// 	} catch (error) {
// 		console.log(error);
// 	}
// };

// start();
// =================================================================================
// const getText = (path) => {
// 	return new Promise((resolve, reject) => {
// 		readFile(path, "utf-8", (err, data) => {
// 			if (err) {
// 				reject(err);
// 			} else {
// 				resolve(data);
// 			}
// 		});
// 	});
// };

// Better than best version

const { readFile, writeFile } = require("fs").promises;
// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async () => {
	try {
		const first = await readFile("./content/first.txt", "utf-8");
		const second = await readFile("./content/second.txt", "utf-8");
		console.log(first, second);
		await writeFile(
			"./content/result-mind-grenade.txt",
			`This is awesone: ${first}, ${second}`,
			{ flag: "a" }
		);
	} catch (error) {
		console.log(error);
	}
};

start();
