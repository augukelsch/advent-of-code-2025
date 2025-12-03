const fs = require('fs')

const dataInput = fs.readFileSync('./data_3_1.txt').toString().split('\r\n')

let responseArray = []

for (let i = 0; i < dataInput.length; i++) {
    let first = 0;
    let firstPosition = 0;
    let second = 0;

    for (let j = 0; j < dataInput[i].length-1; j++) {
        if(first < dataInput[i][j]){
            first = dataInput[i][j];
            firstPosition = j
            second = 0
        }
        for (let k = firstPosition+1; k < dataInput[i].length; k++) {
            if(second < dataInput[i][k]){
                second = dataInput[i][k]
            }
        }
    }
    console.log(first, second)
    responseArray.push(Number(`${first}${second}`))
}

console.log(responseArray.reduce((a,b) => a+b,0))