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