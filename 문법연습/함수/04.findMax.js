function findMax(numbers){
    let max = numbers[0]; //배열의 초기값을 최대값으로 처음에 설정함

    for (i = 1; i <= numbers.length; i++) //배열의 두번째 요소부터 순회 
    {
        if (numbers[i] > max)
        {
            max = numbers[i];
        }
    }
    return max;

    
}
console.log(findMax([1,4,3,2,5,19,14,15,16]))