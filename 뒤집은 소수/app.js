const fs = require('fs');

// TODO
// 1. 입력값 설정
// 2. solution parm 설정

const [n, ...arr] = fs.readFileSync(`${__dirname}/data.txt`).toString().split(/\s/);


const solution = (n, arr) => {
   const reverseArr = [];
   reverseStrToInt(32);
//    arr.map(value => {
       
//     reverseStrToInt(value);
//         reverseArr.push();
//    });

//    const result = reverseArr.filter(isPrime);
//    console.log(result);
}

//문자열을 받아 뒤집고 숫자로 변환하여 반환
const reverseStrToInt = (str) => {
    let temp = [];
    for(let ch of str){
        temp.unshift(ch);
    }

    return +temp.join('');
}

// 소수 체크
const isPrime = (n) =>{
    if(n <= 3){
        return true;
    }

    for(let i = 4; i < n; i++){
        if(n % i === 0){
            return false;
        }
    }
    return true;
}

solution(+n, arr);



