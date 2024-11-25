
function PersonMaker(name, age) {
    const person = {
        name:name,
        age : age,
        talk() {
            console.log(`Hii, My Name is ${this.name}`);
        },
    };
    return person;
}
//

function Person(name, age) {
    this.name = name;
    this.age = age;
    console.log(this);
}


let p1 = new Person("anaa",60);
let p2 = new Person("ana",60);


class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`Hii, My nameis ${this.name}`);
    }
}
let p1 = new Person("adam",45);
let p3 = new Person("surya",56);
