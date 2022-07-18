console.log('start')
const fs=require('fs');
 
fs.readFile('Demo.txt','utf8',function(err,data) {
console.log("this is the data")
});
console.log('end')
let a=10;
console.log(a);