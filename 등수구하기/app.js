const fs = require('fs');

// TODO
// 1. 입력값 설정
// 2. solution parm 설정

const [n, ...arr] = fs.readFileSync(`${__dirname}/data.txt`).toString().split(/\s/).map(Number);

const solution = (n, arr) => {
    
    const result = [];
    n = arr.length;
    console.log(n);
    console.log(arr);

    for(let i = 0; i < n; i++){
        let rank = 1;
        for(let j = 0; j < n; j++){
            if(arr[i] < arr[j]){
                rank++;
            }
        }
        result.push(rank);
    }

    return result;
}

const result = solution(n, arr);
console.log(result);



