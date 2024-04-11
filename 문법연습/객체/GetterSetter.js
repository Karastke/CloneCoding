class Person{
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if(value.length < 4) {
            console.log("이름은 4글자 이상이여야 함.");
            return;
        }
        this._name = value;
    }
}

let person = new Person("John");
console.log(person.name); // "John"

person.name = "Al"; // 이름은 4글자 이상이어야 합니다.
console.log(person.name); // "John" 유지

person.name = "Alex";
console.log(person.name); // "Alex"