const fs = require("fs");

const input = fs.readFileSync(`${__dirname}/data.txt`).toString();

const solution = (n) => {
  const result = [1, 1];

  for (let i = 2; i < n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }

  console.log(result.join(" "));
};

solution(+input);
