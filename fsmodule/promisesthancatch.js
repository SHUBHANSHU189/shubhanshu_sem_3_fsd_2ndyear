const fs = require("fs").promises;

async function writeFile(){
    try{
        await fs.writeFile("promise.txt","hello students!");
        console.log("file created and data written successfully.");
    }catch(error){
        console.log("error:",error);
    }
}
writeFile();

//update the file
async function appendFile(){
     try{
        await fs.appendFile("promise.txt","\nwelcome to fsd training" );
        console.log("data appended  successfully.");
    }catch(error){
        console.log("error:",error);
    }
}
appendFile();

// renaming the file 
async function renameFile(){
  try{
        await fs.rename("promise.txt","promises_new.txt" );
        console.log("file renamed  successfully.");
    }catch(error){
        console.log("error:",error);
    }
}

renameFile();

// delete the file
 
// async function deleteFile(){
//      try{
//         await fs.delete("promise_new.txt",);
//         console.log("file deleted successfully.");
//     }catch(error){
//         console.log("error:",error);
//     }
// }

// deleteFile();