// Modules - Do we have to keep all files in same directory?
// no, we can keep all files in different directories i.e. modules
// Modules - Encapsulated code (only shared minumum code)
// Node uses CommonJS, every file is module (by default)
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade') // this code will be executed
// (when we import a file, it will be executed)

// console.log(data)

// console.log(names)

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)