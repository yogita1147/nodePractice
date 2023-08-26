///creating files using nodejs.... files are present in differnt folder... knowing about path module and dir

const fs=require("fs");

const path=require("path");
console.log(path,'path');
const dirpath=path.join(__dirname,'/files');
console.log(dirpath,'dirpath');

for(let i=0;i<4;i++)
{
    fs.writeFileSync(dirpath+'/home'+i+'.txt','iam aaaaaa');

}

//CRUD OPERATION WITH FILE SYSTEM USING FS MODULE 
//const fs=require('fs');
//const path=require('path');
const dirpath1=path.join(__dirname,'/files');
fs.writeFileSync(dirpath1+'/create.txt','creating thisfile');
//read content from file....
fs.readFile(dirpath+'/create.txt','utf8',(err,item)=>{
    console.log(item);
});
//updating/appending something 
fs.appendFileSync(dirpath1+'/create.txt','llllllllllllll',(err)=>{if(!err){console.log('file upldated ')}})
//deleteing the file...
fs.unlinkSync(dirpath+'/create.txt',(err)=>{!err?console.log('deleted'):null})



