const fs = require('fs')

const dataInput = fs.readFileSync('./data_2_1.txt').toString().split(',')

let incorrectCount = 0;

let incorrectList = []

function checkMirror(value) {
    let range = value.split('-')
    let max = Number(range[1])
    let min = Number(range[0])

    for (let i = min; i <= max; i++) {
        let start = i.toString().slice(0,Math.floor(i.toString().length/2))
        let end = i.toString().slice(Math.ceil(i.toString().length/2), i.length)
        if(start == end && i.toString().length%2 == 0){
            incorrectCount++
            incorrectList.push(i)
        }
    }
}

function checkInvalid(data) {
    for (let i = 0; i < data.length; i++) {
        checkMirror(data[i])
    }
    let sum = 0;
    for (let i = 0; i < incorrectList.length; i++) {
        console.log(incorrectList[i])
        sum = sum+Number(incorrectList[i])
        
    }
    return `O resultado é: ${sum}`
}

console.log(checkInvalid(dataInput))

//dividir e checar a outra metade se é igual
//verificar o range (start e fim)
//somar os ids "invalidos" ao final