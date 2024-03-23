let person = {
    name:"noona",
    age:20
}

// let name = person.name
// let age = person['age'] 일반적으로 사용할 경우

let {name, age} = person

console.log(name,age)

let array = [1,2,3,4]
let [a,b,...rest] = array

console.log(rest)