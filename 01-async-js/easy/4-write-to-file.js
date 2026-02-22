// ## Write to a file

// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.


import fs from 'fs'



const data = "hello ishwar you are very great developer"


fs.writeFile('README.md',data , (err)=>{

    
    if(err){
        console.error(err);
        return;
    }

    console.log("data is written in the files")
})