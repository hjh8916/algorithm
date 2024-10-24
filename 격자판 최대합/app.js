const fs = require('fs');

// TODO
// 1. 입력값 설정
// 2. solution parm 설정

const [n, ...arr] = fs.readFileSync(`${__dirname}/data.txt`).toString().split(/\s/).map(Number);

// 1차원 배열(arr)을 2차원 배열로 초기화
const twoDArray = Array.from({length: n}, (v, i) => 
    Array.from({length: n}, (v2, j) => 
        arr[(i*n)+j]));

const solution = (n, arr) => {
    // 최소값으로 초기화
    let max = Number.MIN_SAFE_INTEGER;

    for(let i = 0; i < n; i++){
        // 행과 열의 합을 저장할 배열 초기화
        const summary = new Array(4).fill(0);

        for(let j = 0; j < n; j++){
            // 행의 합
            summary[0] += +(arr[i][j]);
            // 열의 합
            summary[1] += arr[j][i];
            // 좌 -> 우 대각선 합
            summary[2] += arr[j][j];
            // 우 -> 좌 대각선 합
            summary[3] += arr[j][n-(1+j)];
        }
        
        // 최대값 추출 및 저장
        const value = Math.max.apply(null, summary)

        // 최대값 저장
        max = max < value ? value : max;
    }

    return max;

}

const result = solution(n, twoDArray);
console.log(result);



