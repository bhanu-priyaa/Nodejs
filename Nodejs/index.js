// const app = require('./app')
// //console.log(app.z())
// //var x='20';
// const arr=[2,3,4,5,6,7,8,8];
// //console.log(arr[5])

// let result =arr.filter((item)=>{ //use of filter
//     return item>=7
// }) 
// console.warn(result) 

//const fs= require('fs'); //non global modules are which needs to import
//console.log("code step by step"); // global modules which doesn't needs to import.
//fs. writeFileSync("hello2.txt", "like like like") //ng
//console.log("->>",__dirname); // tells the name of a directory
//console.log("->>",__filename); // tells the filename

// it is not required to use to use(fs required in top level we can use it in lower side also)
//const fs= require('fs').writeFileSync;
// console.log("->>",__filename);
// fs.writeFileSync("code.txt","Some code")
//fs("abc.file", "abc")

 // let's make a basic server
 //function1
//  const http = require('http');
 
//  http.createServer((req,resp)=>{
//     resp.write("<h1>Hello this is bhanu rathore</h1>");
//     resp.end();
//  }).listen(4500); // all parameter as a function take

//  test(a,b)
//  {

//  }

//  test(10,20) // same we can also pass functions 

//function 2
// const http = require('http');  //for this we have to create different function.
 
//  function dataControl(req,resp) 
//  {
//     resp.write("<h1>Hello, This is bhanu rathore</h1>");
//     resp.end();
//  }



//  http.createServer(dataControl).listen(4500);
 
//function 3 

// const http = require('http');  
 
//  function test(a)
//  {
//     return a*10;
//  } 
 
//  const test =(a)=>a*100 // arrow function


// http.createServer((req,resp) => {
//     resp.write("<h1>Hello, This is bhanu rathore</h1>");
//     resp.end();
//  }).listen(4500);

// package. json

//console.log("Package.json");
 
// Make a simple api
const http = require('http');
 http.createServer((req,resp)=>{
resp.writeHead(200,{'Content-Type':'application\json'});
resp.write(JSON.stringify({name:'Bhanu',email:'bhanu06@gmail.com'}));
resp.end();
 }).listen(3000); 

  //console.log(process.argv); //argument vector

//this is how we can create and remove files
// const fs = require('fs');

// const input = process.argv;
// if (input[2]=='add')
// {
//     fs.writeFileSync(input[3],input[4])
// }
// else if(input[2]=='remove')
// {
//     fs.unlinkSync(input[3])
// }
// else{
//     console.log("invalid input")
// }

//const { dir } = require('console');
// const fs = require('fs');
// const path = require('path');
// const dirPath= path.join(__dirname,'files');
// console.warn(dirPath)
// loop
// for(i=0;i<5;i++)
//  {
//     //for creating 5 files into 1 folder
//     fs.writeFileSync(dirPath+"/bhanu"+i+".txt","a simple text file"); // create pnly one file because same name created only one file. overide so we have to create hello 1,2,3 etc (dynamic) +i+ or ${i}
//     //fs.writeFileSync(`bhanu${i}.txt`,"a simple text file");
// }  

// fs.readdir(dirPath,(err,files)=>{
//     //console.warn(files)   // in array
//     files.forEach((item)=>{    // for making diff diff files
//         console.log("File name is",item)

//     })
// })

// crud with file system

// const fs= require('fs');
// const path = require('path');
// const dirpath= path.join(__dirname,'crud');
// const filepath= `${dirpath}/apple.txt`;


// //fs.writeFileSync(filepath,'This is a simple text file');

//Asynchronous

//console.log("start exe...")

//console.log("logic exe...") // 2 seconds

// setTimeout(()=>{
//     console.log("logic exe...")
// },2000)
// console.log("logic exe...")

// console.log("complete exe...") // doesn't wait for second one

//drawback

// let a=10;
// let b=20;

// setTimeout(()=>{
//     b=20;
// },2000)  // it takes time
// console.log(a+b) //bcz it executes first we can handle it by using call backs or promises

// how to resolve this drawback . earlier people uses call backs but now mostly people use promises or async await
let a=10;
let b=20;

// setTimeout(()=>{
//     b=20;
// },2000)  // it takes time
let waitingData= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        b=30;
        resolve(30)
    },2000) 
})

waitingData.then((data)=>{
    b=data;
    console.log(a+b)  
})
//use of  express js  

// const express= require('express');
// const app =express();

// app.get('',(req,res)=>{
//     res.send('Hello,this is Home Page');

// });

// app.get('/About',(req,res)=>{
//     res.send('Hello,this is About Page');

// });
// //server
// app.listen(3000);

// how to show req data comes

//  const express= require('express');
//  const app =express();

//  app.get('',(req,res)=>{
//     console.log("data sent by browser =>>>",req.query.name)
//      res.send("welcome,"+req.query.name);

//  });

//  app.get('/About',(req,res)=>{
//      res.send('Hello,this is About Page');

//  });
//  //server
//  app.listen(3000);
