// Globals - No window (window object gives function like query selector and toher useful methods)

// Node does not have window objects

// There are some globals, which can be accessed in node

// __dirname - path to current directory
// __filename - file name
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about env where the program is being executed

console.log(__dirname)

setInterval(() => {
  console.log('hello world')
}, 1000)