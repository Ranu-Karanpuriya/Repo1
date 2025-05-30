function outer(){

let nm = "krishna"

return function inner(){
    console.log(nm);
}

}

let res = outer()

res()
res()
res()