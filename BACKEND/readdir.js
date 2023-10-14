const fs = require("fs"); 

// Function to get current filenames 
// in directory 

function readDir(directory_name) {
    let filenames = fs.readdirSync(directory_name); 
    let files = [];
    console.log("\nFilenames in directory:"); 
    filenames.forEach((file) => { 
        files.push(file);
    });
    return files;
}

module.exports = readDir;