let arr = [2, 3, 7, 8, 9];

// console.log(typeof arr);


// console.log(arr.find((item)=>item%2===0));


// higher order function
function main(a) {
    if (typeof a !== "function") {
        throw new Error(typeof a + " is Not a function")
    }
    a()
}


main(() => console.log("higher order function"))


function fn() {
    return () => {
        console.log("higher order function");
    }
}

let ret = fn()

ret()

// example for find even number
function even(arry, fn) {
    let filt = []
    for (let i = 0; i < arry.length; i++) {
        if (fn(arry[i])) {
            filt.push(arry[i]);
        }
    }
    return filt
}

console.log(even(arr, (item) => item % 2 === 0));
console.log(arr.filter((item) => item % 2 === 0));


// recurrsion
count(1)

function count(num) {

    if (num <= 10) {
        console.log(num);
        count(num+1)
    }

}




