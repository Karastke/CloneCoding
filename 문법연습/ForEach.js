// const people = [
//     { name: 'a' , age: 25},
//     { name: 'b' , age: 22},
//     { name: 'c' , age: 30}
// ];
// let names = []; 
// people.forEach(function(person) {
//     names.push(person.name);
// });

// console.log(`이름: ${names}`);

const ages = [18, 21, 16, 12, 24 ,32];
const adults = [];
ages.forEach(function(age) {
    if (age >= 18) {
        adults.push(age);
    }
});
console.log(`성인: ${adults}`);