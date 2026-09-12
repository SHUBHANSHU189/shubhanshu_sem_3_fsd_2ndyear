const fs = require('fs');

fs.writeFile(
    'sample.txt','welcome to full stack development',(err)=>{
        if(err){
            console.log('Error creating file:',err);
            return;
        }

        console.log('1. File created successfully');
    }
)
fs.readFile('sample.txt', 'utf8', (err, data) => {
    if (err){
        console.log('error reading file:',err);
        return;
    }
    console.log('2.file content:');
    console.log(data);
})

// append

fs.appendFile('sample.txt','\nSemester:3',(err)=>
{
    if(err){
        console.log('error updating file:',err);

    }else{
        console.log('\n3. File updated successfully!');
    }
}
)
// updated read
fs.readFile('sample.txt','utf8',(err,data)=>{
    if(err){
        console.log('error  reading file:',err);
        return;
    }
    console.log('4.file Content:');
    
    console.log(data);

    
}
)
fs.writeFile(
    'sample4.txt','welcome to full stack development of cse ds',(err)=>{
        if(err){
            console.log('7.Error creating file:',err);
            return;
        }

        console.log('7. File created successfully');
    }
)

fs.unlink('sample4.txt',(err)=>{
    if(err){
        console.error('error deleting file:',err);
    }
    else{
        console.log('file delted succesfully');
    }
})








