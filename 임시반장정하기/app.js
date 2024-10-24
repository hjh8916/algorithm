const fs = require('fs');

// TODO
// 1. 입력값 설정
// 2. solution parm 설정

// const [n, ...inputArr] = fs.readFileSync(`${__dirname}/data.txt`).toString().trim().split(/\s/).map(Number);

// const arr = Array.from({length:n}, (v, i) =>
//     Array.from({length:n}, (v2, j) => 
//         inputArr[(i*n)+j]));

// const solution = (n, arr) => {

//     const count = new Array(n).fill(0);

//     for(let i = 0; i < n; i++){
//         const h = new Array(n).fill(0);
//         for(let j = 0; j < n; j++){
//             arr[i][j]
//         }
//     }
// }

// const result = solution(n, arr);
// console.log(result);


const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  /*
    7 4 1
    8 5 2
    9 6 3 
  */
 const test = call => {
    call.push(1);
    call.push(1);
    call.push(1);
    call.push(1);
 }
 const answer = JSON.parse(JSON.stringify(arr));
 test(answer);

 console.log(arr)
//  console.log(answer)
//   const rotation_R90 = (arr) => {
//     const answer = JSON.parse(JSON.stringify(arr));
  
//     for (let idx1 = arr.length - 1; idx1 >= 0; idx1--) {
//       for (let idx2 = 0; idx2 < arr[idx1].length; idx2++) {
//         const idx2re = arr[idx1].length - 1;
  
//         answer[idx2][idx2re - idx1] = arr[idx1][idx2];
//       }
//     }
//     return answer;
//   };
  
//   console.log(rotation_R90(arr));

// const newArr = []
//   for(let i = 0; i < 3; i++){
//     for(let j = 0; j < 3; j++){
//         newArr[i][j] = arr[3-1-j][i];
//     }
//   }
//   // 
  //

