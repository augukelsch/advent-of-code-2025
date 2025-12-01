const fs = require('fs');

const dataInput = fs.readFileSync('./data_1_1.txt').toString().split('\r\n');

let startPointer = 50;

function calculateValue(turnCodeInput) {
    const direction = turnCodeInput[0];
    let value = Number(turnCodeInput.slice(1,turnCodeInput.length));
    if(value > 99){
        value = Number(turnCodeInput.slice(turnCodeInput.length-2,turnCodeInput.length));
    }

    if(direction == "R"){
        startPointer+=value;
    }else{
        startPointer-=value;
    }

    if(startPointer > 99){
        startPointer-=100
    }else if(startPointer < 0){
        startPointer+=100
    }
    return startPointer;
}

function sumZeros() {
    let total = 0;
    for (let i = 0; i < dataInput.length; i++) {
        let result = calculateValue(dataInput[i]);
        if(result == 0){
            total++;
        }
    }
    return total;
}
console.log(sumZeros())
