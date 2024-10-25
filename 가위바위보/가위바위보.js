const fs = require('fs');

/**
 * A, B 두 사람이 가위바위보 게임을 합니다. 총 N번의 게임을 하여 A가 이기면 A를 출력하고, B가 이기면 B를 출력합니다.
 * 비길 경우에는 D를 출력합니다.
 * 가위, 바위, 보의 정보는 1:가위, 2:바위, 3:보로 정하겠습니다
 */

const [n, ...arr] = fs.readFileSync(`${__dirname}/data.txt`).toString().split(/\s/).map(Number);
const playerA = arr.slice(0, n);
const playerB = arr.slice(n, arr.length);

const solution = (n, playerA, playerB) => {
  const answer = [];
  for (let index = 0; index < n; index++) {
    if (playerA[index] === playerB[index]) {
      answer[index] = 'D';
    } else if ((playerA[index] === 1 && playerB[index] === 3) || (playerA[index] === 3 && playerB[index] === 1)) {
      answer[index] = playerA[index] === 1 ? 'A' : 'B';
    } else {
      answer[index] = playerA[index] > playerB[index] ? 'A' : 'B';
    }
  }

  return answer;
};

const result = solution(n, playerA, playerB);
console.log(result.join('\n'));
