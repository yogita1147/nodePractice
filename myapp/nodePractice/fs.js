///creating files using nodejs.... files are present in differnt folder

const fs=require("fs");

const path=require("path");
console.log(path,'path');
const dirpath=path.join(__dirname,'/files');
console.log(dirpath,'dirpath');

for(let i=0;i<4;i++)
{
    fs.writeFileSync(dirpath+'/home'+i+'.txt','iam aaaaaa');

}



