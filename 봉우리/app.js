const fs = require("fs");

// TODO
// 1. 입력값 설정
// 2. solution parm 설정

const [n, ...inputArr] = fs.readFileSync(`${__dirname}/data.txt`).toString().split(/\s/);

const arr = Array.from({ length: n }, (v, i) => Array.from({ length: n }, (v2, j) => inputArr[i * n + j]));

const solution = (arraySize, arr) => {
  let count = 0;
  const directionX = [-1, 0, 1, 0];
  const directionY = [-1, 0, 1, 0];

  for (let row = 0; row < arraySize; row++) {
    for (let col = 0; col < arraySize; col++) {
      //#region 연습코드
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
      //#endregion
      let flag = true;
      for (let direction = 0; direction < 4; direction++) {
        let nextX = row + directionX[direction];
        let nextY = col + directionY[direction];

        if (nextX >= 0 && nextX < arraySize && nextY >= 0 && nextY < arraySize && arr[nextX][nextY] >= arr[row][col]) {
          flag = false;
          break;
        }
      }
      if (flag) count++;
    }
  }
  return count;
};

const result = solution(n, arr);
console.log(result);
