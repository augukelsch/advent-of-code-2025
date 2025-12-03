const fs = require('fs')

const dataInput = fs.readFileSync('./data_3_1.txt').toString().split('\r\n')

let responseArray = []

for (let i = 0; i < dataInput.length; i++) {
    let arrayNumbers = []
    let arrayMaxSize = 11;

    let highestPosition = 0;
    for (let j = 0; j < 12; j++) {
        highest = dataInput[i][highestPosition];

        for (let k = highestPosition; k < dataInput[i].length-arrayMaxSize; k++) {
            if(highest < dataInput[i][k]){
                highest = dataInput[i][k];
                highestPosition = k
            }
        }
        highestPosition++
        arrayMaxSize--;
        arrayNumbers.push(highest)
        highest = dataInput[i][highestPosition];
    }
    responseArray.push(Number(arrayNumbers.reduce((a,b) => a+b)))
}
console.log(responseArray.reduce((a,b) => a+b,0))