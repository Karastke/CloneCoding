class Utility {
    static randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min +1)) + min;
    }

    //주어진 문자열의 첫 글자를 대문자로 변환시킴
    static capitalize(string) {
        if(!string) return string; //빈 문자열이거나 undefined인 경우 그대로 반환
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
}

//유틸리티 클래스 사용 예시

// randomNumber 메서드 사용 예시
const randomNum = Utility.randomNumber(1,10);
console.log(`1과 10사이에서 무작위 숫자는 ${randomNum}입니다.`)

const capitalizedString = Utility.capitalize("to")
console.log(`Capitalized string: ${capitalizedString}`);