// let bhajanlal = "chhogelal"
// let dholak = "bajane wala"
// let pi = 3.14;

// // ES5 module
// module.exports = [bhajanlal,pi,dholak];


function khatam (){
    console.log("khatam");
}

let num = 30

let arr = [2,3,4,5]

let jayprakash = "JP"

module.exports = {khatam,num,arr,jayprakash}

let obj = require('./import');

console.log(obj);
