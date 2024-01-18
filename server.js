console.log("Hello");
//console.log(global);

const os = require('os');
const path = require('path');


/*console.log(os.type());
console.log(os.version());
console.log(os.homedir());

console.log(__dirname);
console.log(__filename);

console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));

console.log(path.parse(__filename));*/ //returns an object of the file path


//you can import it as a whole and then access each function individually with the objectct syntax
//const math = require('./math')
//math.add(2,5)

const {add, multiply, divide} = require('./math');

console.log(add(2, 3));
console.log(multiply(2, 3));
console.log(divide(4, 2));

