const fs = require('fs');
   fs.writeFileSync('secAstudent.txt','this is the experiment  no.2 in FSD workshop experiment','utf8');
   
   console.log('file is written successfully');
   //read
   const data=fs.readFileSync("secAstudent.txt",'utf8');
   console.log('file content is given as:',data);

   fs.appendFileSync('secAstudent.txt','\nthis is new line added ','utf8');
   console.log('file has been appended successfully');

    fs.writeFileSync('example.txt','this is the experiment  no.2 in FSD workshop experiment','utf8');

    fs.unlinkSync('example.txt');
    console.log('file is deleted successfully here');

    // folder 

    // fs.mkdirSync('sample folder');
    // console.log('new folder is created');

    // delete folder

    // fs.rmdirSync('sample folder');
    // console.log('folder has been removed successfully');
    
    if(fs.existsSync('secAstudent.txt')){
        console.log('file exists');
    }else{
        console.log('file not found ,need to create this file');
    }
