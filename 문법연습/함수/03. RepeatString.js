function repeatString(str, num) {

    let result = ''

    for (i=0; i<=num; i++)
    {
        result += str;
    }

    return result;
}

console.log(repeatString('hi',3));