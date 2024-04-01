const multiply = (a,b) => {
    const result = a * b;
    return result;
};
console.log(multiply(3,8));

///////////////////

const numbers = [1,2,3,4,5];
const squared = numbers.map(number => number * number);
console.log(squared);

////////////////////
const greet = name => `Hello, ${name}!`;
console.log(greet('world'));

////////////////////////
const add = (a,b) => a + b;
console.log(add(4, 7));

///////
const createUser = (name, age) => ({name: name, age: age});
console.log(createUser('John', 30));