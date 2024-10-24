const fs = require('fs');


// TODO
// 1. 입력값 설정
// 2. solution parm 설정

const input = fs.readFileSync(`${__dirname}/data.txt`).toString();

const solution = (n) => {
   let result = 0;
   const arr = Array.from({length:n+1}, (v) => v = 0);

   for(let i = 2; i <= n; i++){
        if(arr[i] === 0){
            result++;
            for(let j = i; j <= n; j = j + i){
                arr[j] = 1;
            }
        }
   }
   console.log(result);
}

solution(+input);



