const fs = require('fs');

const dataInput = fs.readFileSync('./data_1_1.txt').toString().split('\r\n');

let startPointer = 50;

let totalZeros = 0;

function calculateValue(turnCodeInput) {
    const direction = turnCodeInput[0];
    let value = Number(turnCodeInput.slice(1,turnCodeInput.length));
    if(value > 99){
        totalZeros = totalZeros+(Math.floor(value/100))
        value = Number(turnCodeInput.slice(turnCodeInput.length-2,turnCodeInput.length));
    }

    if(direction == "R"){
        startPointer+=value;
    }else{
        startPointer-=value;
    }

    if(startPointer > 99){
        startPointer-=100
        totalZeros++
    }else if(startPointer < 0){
        startPointer+=100
        totalZeros++
    }
    return startPointer;
}

function sumZeros() {
    for (let i = 0; i < dataInput.length; i++) {
        calculateValue(dataInput[i]);
    }
    return totalZeros;
}
console.log(sumZeros())
