console.log("hello");

fetch('https://dummyjson.com/products/89')
    .then(res => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

async function getData() {
    try {
        let data = await fetch("https://dummyjson.com/products");
        data = await data.json()
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getData()


console.log("world");
