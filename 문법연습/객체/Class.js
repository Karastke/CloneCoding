class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
}

class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }

    introduce() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and I am in grade ${this.grade}`);
    }
}

let person = new Person("Youngwook", 24);
let student = new Student("Sophie", 23);

person.introduce();
student.introduce();