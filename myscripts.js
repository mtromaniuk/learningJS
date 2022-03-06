let firstNumber = document.getElementById("firstNumber");
let secondNumber = document.getElementById("secondNumber");
const calcAddNumbers = document.querySelector('#calculateAddedNumbers');
let resultDiv = document.querySelector('.container--result__result');
const resultText = document.querySelector('.container--result');
const rollNumberBtn = document.querySelector('#rollNumberBtn');
const firstRolledNumber = document.querySelector('.firstRolledNumber');
const secondRolledNumber = document.querySelector('.secondRolledNumber');
const resultDivide = document.querySelector('.resultOfDivide');
const resultDivideSmall = document.querySelector('.resultOfDivideSmall');
const containerResults = document.querySelector('.container--results');
const switchBtn = document.querySelector('#switchTypeBtn');
let arrayIndexContainers = [];
let countContainers = 0;
const addBtn = document.querySelector('#additionNumbers');
const subBtn = document.querySelector('#subtractionNumbers');
const mulBtn = document.querySelector('#multiplicationNumbers');
const diviBtn = document.querySelector('#divideNumbers');

function switchBtnFunction() {
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

switchBtn.addEventListener("click", function() {
    if(switchBtn.value == "true") {
        calcAddNumbers.disabled = false;

        addBtn.disabled = true;
        subBtn.disabled = true;
        mulBtn.disabled = true;
        diviBtn.disabled = true;
    }  else if(switchBtn.value == "false"){
        calcAddNumbers.disabled = true;

        addBtn.disabled = false;
        subBtn.disabled = false;
        mulBtn.disabled = false;
        diviBtn.disabled = false;
    }
}); 


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
            deleteContainer.textContent = "x";
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
    
            deleteContainer.onclick = function(countContainers) {
                addNewContainer.remove();
                arrayIndexContainers.splice(countContainers, 1);
            }
        }
}

addBtn.onclick = function() {
    console.log(firstNumber.value, secondNumber.value, "AddBtn");
    if(firstNumber.value=="" || secondNumber.value=="") {
        console.log('You not have any added numbers. Fix it before you wil wish calculate them.')
        resultText.textContent = `Error. You must have added numbers. Please, refresh page and try again.`;
    } else {
        countContainers++;
        arrayIndexContainers.push(countContainers);
        console.log(arrayIndexContainers);

        let resultsAdd = parseInt(firstNumber.value) + parseInt(secondNumber.value);
        let addNewContainer = document.createElement("div");
        let contAdd = document.createElement("div");
        let deleteContainer = document.createElement('button');

        deleteContainer.id = "deleteContainerBtn";
        deleteContainer.textContent = "x";
        addNewContainer.className = "container--result";
        containerResults.appendChild(addNewContainer);
        addNewContainer.appendChild(deleteContainer);
        addNewContainer.appendChild(resultDiv);
        addNewContainer.appendChild(contAdd);
        contAdd.textContent = `Sum: ${firstNumber.value} + ${secondNumber.value} = ${resultsAdd.toFixed(2)}`;
        firstNumber.value = "";
        secondNumber.value = "";

        deleteContainer.onclick = function(countContainers) {
            addNewContainer.remove();
            arrayIndexContainers.splice(countContainers, 1);
        }
    }
}

subBtn.onclick = function() {
    console.log(firstNumber.value, secondNumber.value, "SubBtn")
    if(firstNumber.value=="" || secondNumber.value=="") {
        console.log('You not have any added numbers. Fix it before you wil wish calculate them.')
        resultText.textContent = `Error. You must have added numbers. Please, refresh page and try again.`;
    } else {
        countContainers++;
        arrayIndexContainers.push(countContainers);
        console.log(arrayIndexContainers);
        let resultsSub = parseInt(firstNumber.value) - parseInt(secondNumber.value);
        let addNewContainer = document.createElement("div");
        let contSub = document.createElement("div");
        let deleteContainer = document.createElement('button');

        deleteContainer.id = "deleteContainerBtn";
        deleteContainer.textContent = "x";
        addNewContainer.className = "container--result";
        containerResults.appendChild(addNewContainer);
        addNewContainer.appendChild(deleteContainer);
        addNewContainer.appendChild(resultDiv);
        addNewContainer.appendChild(contSub);
        contSub.textContent = `Sub: ${firstNumber.value} - ${secondNumber.value} = ${resultsSub.toFixed(2)}`;
        firstNumber.value = "";
        secondNumber.value = "";

        deleteContainer.onclick = function(countContainers) {
            addNewContainer.remove();
            arrayIndexContainers.splice(countContainers, 1);
        }
    }
}

diviBtn.onclick = function() {
    console.log(firstNumber.value, secondNumber.value, "DiviBtn");
    if(firstNumber.value=="" || secondNumber.value=="") {
        console.log('You not have any added numbers. Fix it before you wil wish calculate them.')
        resultText.textContent = `Error. You must have added numbers. Please, refresh page and try again.`;
    } else {
        countContainers++;
        arrayIndexContainers.push(countContainers);
        console.log(arrayIndexContainers);

        let resultsDivide = parseFloat(firstNumber.value) / parseFloat(secondNumber.value);
        let addNewContainer = document.createElement("div");
        let contDivi = document.createElement("div");
        let deleteContainer = document.createElement('button');

        deleteContainer.id = "deleteContainerBtn";
        deleteContainer.textContent = "x";
        addNewContainer.className = "container--result";
        containerResults.appendChild(addNewContainer);
        addNewContainer.appendChild(deleteContainer);
        addNewContainer.appendChild(resultDiv);
        addNewContainer.appendChild(contDivi);
        contDivi.textContent = `Divide: ${firstNumber.value} / ${secondNumber.value} = ${resultsDivide.toFixed(2)}`;
        firstNumber.value = "";
        secondNumber.value = "";

        deleteContainer.onclick = function(countContainers) {
            addNewContainer.remove();
            arrayIndexContainers.splice(countContainers, 1);
        }
    }
}

mulBtn.onclick = function() {
    console.log(firstNumber.value, secondNumber.value, "MulBtn")
    if(firstNumber.value=="" || secondNumber.value=="") {
        console.log('You not have any added numbers. Fix it before you wil wish calculate them.')
        resultText.textContent = `Error. You must have added numbers. Please, refresh page and try again.`;
    } else {
        countContainers++;
        arrayIndexContainers.push(countContainers);
        console.log(arrayIndexContainers);

        let resultsMulti = parseFloat(firstNumber.value) * parseFloat(secondNumber.value);
        let addNewContainer = document.createElement("div");
        let contMult = document.createElement("div");
        let deleteContainer = document.createElement('button');

        deleteContainer.id = "deleteContainerBtn";
        deleteContainer.textContent = "x";
        addNewContainer.className = "container--result";
        containerResults.appendChild(addNewContainer);
        addNewContainer.appendChild(deleteContainer);
        addNewContainer.appendChild(resultDiv);
        addNewContainer.appendChild(contMult);
        contMult.textContent = `Multi: ${firstNumber.value} * ${secondNumber.value} = ${resultsMulti.toFixed(2)}`;
        firstNumber.value = "";
        secondNumber.value = "";

        deleteContainer.onclick = function(countContainers) {
            addNewContainer.remove();
            arrayIndexContainers.splice(countContainers, 1);
        }
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

// divideRadomNumbers.onclick = function divide() {
//     let result = parseInt(rolledDigit) / parseInt(rolledSecondDigit);
//     result = result.toFixed(3);
//     console.log(rolledDigit, rolledSecondDigit);
//     resultDivide.textContent = `${rolledDigit} / ${rolledSecondDigit} = ${result}`;
//     resultDivideSmall.textContent = `Divide result is: ${result}`
// }

