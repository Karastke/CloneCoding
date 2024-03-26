function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n-1);
}

console.log(factorial(2));


//예시
// factorial(5)를 호출하면 다음과 같이 처리됩니다:

// scss
// Copy code
// factorial(5)
// = 5 * factorial(4)
// = 5 * (4 * factorial(3))
// = 5 * (4 * (3 * factorial(2)))
// = 5 * (4 * (3 * (2 * factorial(1))))
// = 5 * (4 * (3 * (2 * (1 * factorial(0)))))
// = 5 * (4 * (3 * (2 * (1 * 1))))
// = 5 * (4 * (3 * (2 * 1)))
// = 5 * (4 * (3 * 2))
// = 5 * (4 * 6)
// = 5 * 24
// = 120
