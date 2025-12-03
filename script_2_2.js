const fs = require('fs')

const dataInput = fs.readFileSync('./data_2_1.txt').toString().split(',')

let incorrectCount = 0;

let incorrectList = []

function checkDuplicates(value) {
    const range = value.split('-')
    const max = Number(range[1])
    const min = Number(range[0])

    for (let i = min; i <= max; i++) {
        const len = Number(i.toString().length);
        for (let times = 2; times <= len; times++) {
            if (len % times === 0 && checkIfEqual(i, times)) {
                incrementIncorrect(i);
                break;
            }
        }
    }
}

function checkIfEqual(value, times) {
    const str = value.toString();
    if (str.length % times !== 0) return false;
    const segmentLength = str.length / times;
    const segment = str.slice(0, segmentLength);
    for (let i = 1; i < times; i++) {
        const start = i * segmentLength;
        const end = start + segmentLength;
        if (str.slice(start, end) !== segment) {
            return false;
        }
    }

    return true;
}
function incrementIncorrect(i) {
    incorrectCount++
    incorrectList.push(i)
}

function checkInvalid(data) {
    for (let i = 0; i <  data.length; i++) {
        checkDuplicates(data[i])
    }
    let sum = 0;
    for (let i = 0; i < incorrectList.length; i++) {
        sum = sum+Number(incorrectList[i])
        
    }
    return `O resultado é: ${sum}`
}

console.log(checkInvalid(dataInput))