function red() {
    return new Promise((resolve, reject) => {
        try {
            // throw new Error("aka")
            resolve({ name: "krishna",ff :"jshdjshd" })
        } catch (error) {
            reject({ error: error.message })
        }
    })
}

console.log("hello");

// formal way to handle promises
red().then((data) => { console.log(data.name) }).catch((err) => { console.log(err) })


// new way to handle promise using async/await keywords
async function blue() {
    try {
        let aa = await red()
        console.log(aa);
    } catch (error) {
        console.log(error)
    }
}

blue()

console.log("world");



