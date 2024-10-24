const fs = require('fs');

// TODO
// 1. 입력값 설정
// 2. solution parm 설정

const [n, ...inputArr] = fs.readFileSync(`${__dirname}/data.txt`).toString().split(/\s/);

const arr = Array.from({length: n}, (v, i) => 
    Array.from({length: n}, (v2, j) => 
        inputArr[i*n+j]));


const solution = (n, arr) => {
    let count = 0;
    const dx = [-1,0,1,0];
    const dy = [-1,0,1,0];

    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            // // const summary = new Array(4).fill(Number.MIN_SAFE_INTEGER);
            // // const value = arr[i][j];
            // let value = 0;

            // // 상
            // value = i-1 < 0 ? 0 : arr[i-1][j];
            // if(value >= arr[i][j]){
            //     continue;
            // }
            // // 하
            // value = i+1 >= n ? 0 : arr[i+1][j];
            // if(value >= arr[i][j]){
            //     continue;
            // }
            // // 좌
            // value = j-1 < 0 ? 0 : arr[i][j-1];
            // if(value >= arr[i][j]){
            //     continue;
            // }
            // // 우
            // value = j+1 >= n ? 0 : arr[i][j+1];
            // if(value >= arr[i][j]){
            //     continue;
            // }

            // count++;

            let flag = true;
            for(let k = 0; k < 4; k ++){
                let nx = i+dx[k];
                let ny = j+dy[k];

                if(nx>=0 && nx<n && ny>=0 && ny < n && arr[nx][ny]>=arr[i][j]){
                    flag=false;
                    break;
                }
            }
            if(flag) count++
        }
    }
    return count;
}

// const checkMinus = num => num < 0 ? 

const result = solution(n, arr);
console.log(result);



