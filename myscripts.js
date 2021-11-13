const firstNumber = document.getElementById("firstNumber");
const secondNumber = document.getElementById("secondNumber");
const calcAddNumbers = document.querySelector('#calculateAddedNumbers');
let resultDiv = document.querySelector('.container--result__result');
const resultText = document.querySelector('.container--result');
let resultTextSmall = document.querySelector('.container--result__resultSmall');
const rollNumberBtn = document.querySelector('#rollNumberBtn');
const firstRolledNumber = document.querySelector('.firstRolledNumber');
const secondRolledNumber = document.querySelector('.secondRolledNumber');
const divideRadomNumbers = document.querySelector('#divideNumbers');
const resultDivide = document.querySelector('.resultOfDivide');
const resultDivideSmall = document.querySelector('.resultOfDivideSmall');

function switchBtnFunction() {
    let switchBtn = document.querySelector('#switchTypeBtn');
    console.log(switchBtn);
    if(switchBtn.value == "false") {
        switchBtn.innerHTML = "Off";
        switchBtn.value = "true";
    } else if(switchBtn.value == "true") {
        switchBtn.innerHTML = "On";
        switchBtn.value = "false";
    } else {
        console.log("The switchBtn has an error.")
    }
}

calcAddNumbers.onclick = function calculate() {
    let results = parseInt(firstNumber.value) + parseInt(secondNumber.value);
    resultDiv.textContent = results;
    resultDiv.textContent = `${firstNumber.value} + ${secondNumber.value} = ${results}`
    resultTextSmall.textContent = `Sum result is: ${results}`
    console.log('firstNumber.value', 'secondNumber.value')
}

let numberOfClick = 1;
let rolledDigit;
let rolledSecondDigit;

rollNumberBtn.onclick = function losTheNumbers() {
    numberOfClick++;
    if(numberOfClick%2) {
       rolledDigit = Math.floor(Math.random() * 100);
       console.log(rolledDigit, 'pierwsza liczba');
       firstRolledNumber.textContent = rolledDigit;
    } else {
        rolledSecondDigit = Math.floor(Math.random() * 100);
        console.log(rolledSecondDigit, 'druga liczba')
        secondRolledNumber.textContent = rolledSecondDigit;
    }
}

divideRadomNumbers.onclick = function divide() {
    let result = parseInt(rolledDigit) / parseInt(rolledSecondDigit);
    result = result.toFixed(3);
    console.log(rolledDigit, rolledSecondDigit);
    resultDivide.textContent = `${rolledDigit} / ${rolledSecondDigit} = ${result}`;
    resultDivideSmall.textContent = `Divide result is: ${result}`
}

