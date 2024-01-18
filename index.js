const fs = require('fs');
//fs.readfile is asynchronous
//instead of hardcoding the file path we can use path module
const path = require('path');

fs.readFile(path.join(__dirname, 'Files', 'starter.txt'), (err, data) => {
    if(err) {
        throw err;
    }
    console.log(data.toString()); //the data is encoded so you have to convert it to a string. you can alternatively add "utf8" parameter just befoire the callback fn
}); 

console.log("fs.readFile is an asynchronous fn");

fs.writeFile(path.join(__dirname, 'Files', 'newwrite.txt'), "written with fs", (err) => {
    if(err) {
        throw err;
    }
    console.log("Write Success");
}); 

fs.appendFile(path.join(__dirname, 'Files', 'test.txt'), "testing text test", (err) => {
    if(err) {
        throw err;
    }
    console.log("Append Successful");
}); 


//exit on uncaught errors
process.on('uncaughtException', err =>{
    console.log(`There was uncaught error: ${err}`);
    process.exit(1);
})
const 