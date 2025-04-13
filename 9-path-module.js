const path = require("path");

console.log(path.sep);

const filePath = path.join("/content", "subfolder", "test.txt");
console.log(filePath); // returns normalized path // /content/subfolder/test.txt

const base = path.basename(filePath);
console.log(base); // test.txt

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute); // /home/greenal/tutorial_node/content/subfolder/test.txt
