const fs = require('fs');

// TODO
// 1. 입력값 설정
// 2. solution parm 설정

const [input, ...arr] = fs.readFileSync(`${__dirname}/data.txt`).toString().split(/\s/);


const solution = (n, arr) => {
   
    let count = 1;
    let result = 0;
   
    for(let i = 0; i < n; i++){
        if(arr[i] == 1){
            result += count;
            count++;
        }else{
            count = 1;
        }
    }
    
    return result;
}

const result = solution(+input, arr);
console.log(result);



