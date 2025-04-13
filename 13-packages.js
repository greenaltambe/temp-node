// npm -- global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

// we can provide scripts in package.json
// to run the script, use npm start (here in this example we used start in package.json)
//   "scripts": {
// "start": "node app.js"?
// },

const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
console.log("HHHH, this is something")


// "scripts": {
//   "start": "node app.js",
//   "dev": "nodemon app.js"
// },

// the above script and  the below are same

// "scripts": {
//  "start": "nodemon app.js" 
// }