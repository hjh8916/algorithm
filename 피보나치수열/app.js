const fs = require('fs');

const input = fs.readFileSync(`${__dirname}/data.txt`).toString();

const solution = (n) => {
    // console.log(n)
    const result = []

    result.push(1);
    result.push(1);


    for(let i = 2; i < n; i++){
        result.push(result[i-1] + result[i-2])
    }

    console.log(result.join(' '))
    // console.log(result.toString(' '))
    // result.forEach(value => {
    //     // console.log(value)
    //     process.stdout.write('ㅇ');
    // });
}

solution(+input);



