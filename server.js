console.log("hello worldn");
//console.log(global); 
//Core modules 
const os = require('os')
const path = require('path')

//import your own module 
//you can import it as a whole and then access each function individually with the objectct syntax
const math = require('./math')
//const {multiply} = require('.math) //alternatively you can destructure the function you want

console.log(os.type());
console.log(os.homedir());
console.log(os.version());

console.log(__dirname)
console.log("this is the file name: " + __filename)

console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))
console.log(path.extname(__filename))
console.log(path.parse(__filename)); //returns an object of the file path


console.log(math.add(2,5))

