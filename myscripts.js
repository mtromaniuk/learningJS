let firstNumber = document.getElementById("firstNumber");
let secondNumber = document.getElementById("secondNumber");
const calcAddNumbers = document.querySelector('#calculateAddedNumbers');
let resultDiv = document.querySelector('.container--result__result');
const resultText = document.querySelector('.container--result');
const rollNumberBtn = document.querySelector('#rollNumberBtn');
const firstRolledNumber = document.querySelector('.firstRolledNumber');
const secondRolledNumber = document.querySelector('.secondRolledNumber');
const divideRadomNumbers = document.querySelector('#divideNumbers');
const resultDivide = document.querySelector('.resultOfDivide');
const resultDivideSmall = document.querySelector('.resultOfDivideSmall');
const containerResults = document.querySelector('.container--results');
let arrayIndexContainers = [];
let countContainers = 0;

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
    console.log(firstNumber.value, secondNumber.value)
    if(firstNumber.value=="" || secondNumber.value=="") {
        console.log('You not have any added numbers. Fix it before you wil wish calculate them.')
        resultText.textContent = `Error. You must have added numbers. Please, refresh page and try again.`;
    } else {
        countContainers++;
        arrayIndexContainers.push(countContainers);
        console.log(arrayIndexContainers);

        let resultsAdd = parseInt(firstNumber.value) + parseInt(secondNumber.value);
        let resultsSub = parseInt(firstNumber.value) - parseInt(secondNumber.value);
        let resultsMulti = parseInt(firstNumber.value) * parseInt(secondNumber.value);
        let resultsDivide = parseInt(firstNumber.value) / parseInt(secondNumber.value);
        let addNewContainer = document.createElement("div");
        let contAdd = document.createElement("div");
        let contSub = document.createElement("div");
        let contDivi = document.createElement("div");
        let contMult = document.createElement("div");
        let deleteContainer = document.createElement('button');

        deleteContainer.id = "deleteContainerBtn";
        deleteContainer.textContent = "X";
        addNewContainer.className = "container--result";
        containerResults.appendChild(addNewContainer);
        addNewContainer.appendChild(deleteContainer);
        addNewContainer.appendChild(resultDiv);
        addNewContainer.appendChild(contAdd);
        contAdd.textContent = `Sum: ${firstNumber.value} + ${secondNumber.value} = ${resultsAdd.toFixed(2)}`;
        addNewContainer.appendChild(contSub);
        contSub.textContent = `Sub: ${firstNumber.value} - ${secondNumber.value} = ${resultsSub.toFixed(2)}`;
        addNewContainer.appendChild(contMult);
        contMult.textContent = `Multi: ${firstNumber.value} * ${secondNumber.value} = ${resultsMulti.toFixed(2)}`;
        addNewContainer.appendChild(contDivi);
        contDivi.textContent = `Divide: ${firstNumber.value} / ${secondNumber.value} = ${resultsDivide.toFixed(2)}`;
        firstNumber.value = "";
        secondNumber.value = "";
    }
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

