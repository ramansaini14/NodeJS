// console.log(global);
// console.log(globalThis);
// console.log(global === globalThis);

// const {sum} = require("./modules/sum.js");
// const {sum, mul} = require("./modules/index.js")

// const {abc} = require('./consoleWaliFile.js');
// import {sum} from "./sum.js"

// x = 10;

// console.log('This is app.js');
// let a = 5;
// let b = 10;
// sum(a,b);
// mul(a,b);

// Modular Triversal Tictating 
// Module App.js

// 5 Modules namely one, two .... -- index == app all variables and functions 
// var + function + export link to another file 

// variables -- add  -- display
// functions -- call 

// Restriction -- app.js -- one require statement 

// malloc 
// calloc 


// fs.readFile("myFiled.txt", "utf-8", (err,data) => {

//     console.log(data);
//     console.log(err);

// });

// const mydata = require("./data.json")
// console.log(JSON.stringify(mydata));

// console.log(mydata);


// let a = 556789;
// let b = 456789;

// setTimeout(() => {
//     console.log('This is printed');

// }, 0);

// function random (a,b) {
//     console.log(a+b);

// };
// random(a,b);

// CALLBACK HELL 👇
// fs.writeFile("myFile.txt", "This is my new created file", "utf-8", () => {
//     console.log("File created");
//     fs.readFile("myFile.txt", "utf-8", (err, data) => {
//         console.log(data);
//         fs.writeFile("myFile.txt", "This is my new created file", "utf-8", () => {
//             console.log("File created");
//             fs.readFile("myFile.txt", "utf-8", (err, data) => {
//                 console.log(data);
//                 fs.writeFile("myFile.txt", "This is my new created file", "utf-8", () => {
//                     console.log("File created");
//                     fs.readFile("myFile.txt", "utf-8", (err, data) => {
//                         console.log(data);
//                     })
//                 })
//             })
//         })
//     })

// })
// const { writeFile } = require("node:fs")
// const fs = require("node:fs/promises")

// Resolve Using Promises CALLBACK HELL Solution 👇
// ASYNC AWAIT --- Promices
// async function abc () {
//     let api = await fetch("").then(res => {

//     })
// }

// const oneFile = await writeFile()



// function mycallback () {
//     console.log('file read');

// }
// fs.readFile("myFile.txt", "utf-8", mycallback)

// fs.appendFile("myFile.txt", " this is new data", "utf-8", () => {
//     console.log('Data Appendeed');    
// })


// const variablee = require("./consoleWaliFile");

// console.log(variablee, __filename);

// Michel 

// My SQL -- RDBMS
// MAX SQL -- FLOP
// MARIA DB -- HIT

// http://127.0.0.1:5500 www.google.com -- FRONTEND
// http://127.0.0.1:5509 www.google.com -- BACKEND

// SERVER  -- http://127.0.0.1:5509 req -- res


// server.createServer((req, resp) => {
    //     resp.writeHead(200, { "Content-Type": "text/plain" });
    //     resp.end("hello Arsh ")
    // }).listen(7789);
// const http = require("node:http")
// let port = 3670;
// const serve = http.createServer((req, resp) => {
//     if(req.url === "/abc"){
//         resp.end("hello abc response")
//     }
//     resp.end("hello World 2")
// })
// serve.listen(port, () => {
//     console.log(`server listening to port ${port}`);
// });

// /Home
// /about
// /blog/1
// /blog/2
// /blog/3

// EXPRESS 


// MONGODB
// COCKROACHDB
// FIREBASE