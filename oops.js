// 1. inheritence 2.polymorphism 3.Encapsulation 4.Abstration

class Animal {
    constructor(eat) {
        this.eat = eat
    }

    speak() {
        console.log("Sound Rise");
    }

}

let myAnimal = new Animal("khana")
console.log(myAnimal);
myAnimal.speak()


// inheritence

class Dog extends Animal {
    #rabis = "super"
    constructor(eat, loyality) {
        super(eat)
        this.loyality = loyality
    }

    speak(){
        super.speak()
        console.log("BhoU BhoU");
        console.log(this.#rabis);
    }
}


let myDog = new Dog("biscut","yes")

console.log(myDog);
myDog.speak();
console.log(myDog.eat);
console.log(myDog.loyality);




