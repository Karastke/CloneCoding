class Shape {
    constructor(color) {
        this.color = color;
    }
    describe() {
        console.log(`this is a ${this.color} shape.`);
    }
}

class Rectangle extends Shape {
    constructor(color, width, height) {
        super(color);
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    describe() {
        console.log(`This is a ${this.color} rectangle.`);
        console.log(`이 도형의 넓이는 ${this.calculateArea()}와 같습니다.`)
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }

    calculateArea() {
        return (this.radius * this.radius);
    }

    describe() {
        console.log(`This is ${this.color} Circle.`)
        console.log(`이 원의 넓이는 ${this.calculateArea()}와 같습니다.`);
    }

}

let rectangle = new Rectangle("Red", 5, 10);
let circle = new Circle("Blue", 6);

circle.describe();
rectangle.describe();
