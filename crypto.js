console.log('This is my crypto file');
const crypto = require("crypto");
// const data = require("./data.json")
// console.log(data);
// console.log(data.id);
// console.log(data.name);

// const https = require("https")

// https.get("https://dummyapi.online/api/products", (res) => {
//     let dataString = '';
//     res.on('data', (smallData) => {
//         dataString += smallData;
//     });
//     console.log(dataString);
//     res.on('close', () => {
//         console.log(JSON.parse(dataString));
//     })
// })
const fs = require ("node:fs")

// PBKDF2 Password Based key Derivative function 
crypto.pbkdf2("myPassword12", "salt", 5000000, 50, "sha512", (err,key)=>{
    console.log('key is generated', key.toString());
    fs.writeFile("myPassword.txt", `${key}`, "utf-8", () => {
        console.log("File created");
            
        })
});

// crypto.pbkdf2Sync("myPassword12", "salt", 500000, 127, "sha512");
console.log('This was sync');


// Time tide and v8 never waits for anything 

console.log('Program Executed');
