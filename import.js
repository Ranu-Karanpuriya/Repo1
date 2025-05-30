// ES5 module
// let [bhajanlal,dholak,pi] = require('./export');
// // let kaliya = require('./export')

// console.log(bhajanlal);
// console.log(dholak);
// console.log(pi);

let {khatam,arr,...obj} = require('./export');

console.log(arr);
khatam()
console.log(obj);
// console.log();


module.exports = obj;
