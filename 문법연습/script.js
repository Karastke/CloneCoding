//object shorthand assignment
let names = "noona"
let ages = 17

let persons={
    names,
    ages
}

console.log(persons)

//destructuring
let persond = {
    named: "noona" ,
    aged:20
}

//일반적인 상황
// let named = person.name
// let aged = person['age']

//destructuring으로 줄일경우
let {named,aged} = persond

console.log(persond)

let array = [1,2,3,4]
let [a,b,...rest] = array

console.log(rest)

//spread
let person = {name:"noona", age:12}

//실제 값을 복사함, 즉 실제 객체를 하나 더 생성하는 것 
let person2 = {...person, adress:"seoul", name:"youngwook"}


//객체의 주소값만 복사함, 즉 객체는 하나고 그 객체를 참조하는 변수가 두개
let person3 = person

//확인법 
console.log(person==person2) //person2는 새로운 객체이기 때문에 같지 않음, person3는 주소값이니까 객체는 그대로라서 true

console.log(person2)
console.log(person3)

// let a = [1,2]
// let b = [...a,3]

// console.log(b)

// let c = [...a,...b]
// console.log(c)
// //////////////////////////////////


// //삼항연산자
// let person5 = {name:"noona",age:17} //null은 false

// if(person5){
//     console.log(person5.name)
// }else {
//     console.log("there is no person")
// }

// //react에서는 
// console.log(person5?person5.name:"there is no person" )