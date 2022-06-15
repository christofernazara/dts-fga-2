const number = document.querySelectorAll(".number")
console.log(number)

number.forEach((number) =>{
    number.addEventListener('click',() =>{
        console.log(event.target.value)
    })
})
const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) =>{
    calculatorScreen.value = number
}
number.forEach((number) =>{
    number.addEventListener('click',(event) =>{
        updateScreen(event.target.value)
    })
})

let prevNumber = ''
let calculatorOperator = ''
let currentNumber = '0'

const inputNumber = (number) => {
    if(currentNumber === '0') {
        currentNumber = number
    }else{
        currentNumber += number
    }     
}
number.forEach((number) =>{
    number.addEventListener('click',(event) =>{
        inputNumber(event.target.value)
        updateScreen(currentNumber)
})
})

const operator = document.querySelectorAll('.operator')
operator.forEach((operator) =>{
    operator.addEventListener('click',(event) =>{
        console.log(event.target.value)
        inputOperator(event.target.value)
})
})

const inputOperator = (operator) => {
    if(calculatorOperator === ''){
    prevNumber = currentNumber
    }
    calculatorOperator = operator
    currentNumber = '0'
}
const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNumber)
})


const calculate = () => {
    let result = ''
    switch(calculatorOperator){
        case "+" :
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case "-" :
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break
         case "*" :
                result = parseFloat(prevNumber) * parseFloat(currentNumber)
             break
          case "/" :
                result = parseFloat(prevNumber) / parseFloat(currentNumber)
             break
             default :
           return

    }
    currentNumber = result;
    calculatorOperator = ''
}

const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () =>{
clearAll()
updateScreen(currentNumber)
})

const clearAll = () =>{
    prevNumber = ''
    calculatorOperator = ''
    currentNumber = '0'
}
const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (evnt) =>{
    inputDecimal(evnt.target.value)
    updateScreen(currentNumber)
})
inputDecimal = (dot) =>{
   if(currentNumber.includes('.')){
return
   }
    currentNumber += dot
}