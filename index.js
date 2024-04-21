//const fs = require('fs')
const fsPromises = require('fs').promises;
const path = require('path');
//fs.readfile is asynchronous
//you can also use path instead of hardcoding the file path 
/*fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8', (err, data) => {
    if (err) throw  err;
    console.log(data);
})*/

/*
// since fs is asny. this console log will be logged before the file is read
console.log('Hello this is to show fs is asynchronous')

//writing files - this will create new file as defined and add new data as specified.we dont need data in the callback since we are writing and not reading. this also means we dont need utf8 encoding
fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), "Nice to meet you",(err,) => {
    if (err) throw  err;
    console.log("Write complete")
     //appendFiles adds new data to the specified file path
    fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), "\n\nYes, it is!", (err) => {
        if(err) throw new Error
        console.log("Reply.txt added new text with appendfile");

        //rename does what it says- rename files
        //there's no difference if you just put this renamed function in the callback of the main function - writefile. but if you want to control the flow of the functions chronologically nested it inside append.so after append file will be renamed
         fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'renamedreply.txt'), (err) => {
        if (err) throw err;
        console.log("Renamed succesfull")
    })

    })
   
});


//appendfile will add new data to the specified file if the file doesnt exist it append will create a newfile
fs.appendFile(path.join(__dirname, 'files', 'test.txt'), "\nNice to meet you too Nerd",(err,) => {
    if (err) throw  err;
    console.log("Append complete - newfile created")
})
*/
//the nested callbacks with write, append, & rename creates a callback hell which can be cumbersome when dealing with more and larger functions
//to escape this hell we use fs promises to handle the functions asynchronously. no callback hell nesting and functions are executed chronologically
const fileOps = async () => {
    try{ 
        const data = await fsPromises.readFile(path.join(__dirname, "files", "starter.txt"), "utf8");
        console.log(data);
        //after reading the data and storing it in memory variable we can delete the file itself with unlink
        await fsPromises.unlink(path.join(__dirname, "files", "starter.txt"))
        await fsPromises.writeFile(path.join(__dirname, "files", "Promisewrite.txt"), data +" - Writen in Promise");
        await fsPromises.appendFile(path.join(__dirname, "files", "Promisewrite.txt"), "\nNice to meet you too - added by promise append");
        await fsPromises.rename(path.join(__dirname, "files", "Promisewrite.txt"), path.join(__dirname, "files", "renamedPromise.txt"));
        const newdata = await fsPromises.readFile(path.join(__dirname, "files", "renamedPromise.txt"), "utf8");
        console.log(newdata);
    } catch(err) {
        console.error(err);
    }
}

fileOps();

//exit on uncaught errors. node requires us to address all errors so we have to put a general statement that captures all errors that we mighr have not handled graceful
//basically - incase of un addressed errors use this 
process.on('uncaughtException', err =>{
    console.log(`There was uncaught error: ${err}`);
    process.exit(1);
})


