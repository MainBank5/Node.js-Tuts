const path = require('path');
const fs = require('fs');

const readstream = fs.ReadStream(path.join(__dirname, "Files", "lorem.txt"), {encoding: "utf8"});

const writestream = fs.WriteStream(path.join(__dirname, "Files", "new-lorem.txt"));

/*readstream.on('data', (data)=>{
    writestream.write(data);
})*/
//alternativels
readstream.pipe(writestream);
