function hide(fn) {

    if (typeof fn !== "function") {
        throw new Error("fn is not a function")
    }
    
    fn()
}


hide(call)

function call() {
    console.log("callback")
}


const cl = () => {
    console.log("callback")
}

hide(cl)

hide(function () { console.log("callback") })

hide(() => { console.log("callback") })


// this keyword in js

let obj = {
    name: "raju",
    age: 23,
    add: "indore",
    mob: 9926201370,
    getName: function () {
        console.log(this.name);
    },
    getAdd: function () {
        console.log(this.add);
    },
    sibling: {
        sister: 3,
        brother: 1,
        chacha: 6,
        chachi: 8,
        getinfo : function(){
            console.log(this.chachi);
        }
    }
}

obj.getName()
obj.getAdd()
obj.sibling.getinfo()