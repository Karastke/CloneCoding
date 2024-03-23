let person= {name: "noona", age: 12}


//새로운 객체를 생성하는거임 
let person2 = {...person}

//객체의 주소를 복사함
let person3 = person

//그래서 둘을 비교할 때 false 값이 나옴
console.log(person2 === person3)

console.log(person2)

console.log(person3)

//새로 만든 객체에서 무언가를 추가하거나 수정하는게 가능
let person4 = {...person, name:"youngwook", adress:"seoul"}

console.log(person4)

//배열에도 적용이 가능함
let a = [1,2]
let b = [...a,3]
console.log(b)

let c = [...a,...b]
console.log(c)