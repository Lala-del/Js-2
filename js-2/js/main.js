const operations = {
    "+":'add',
    "-":'sub',
    "/":'div',
    "*":'mult'
};

let firstNumber = prompt('Please enter your first number', '2');

while (true) {
    if(firstNumber === '' || firstNumber=== null || firstNumber === undefined || isNaN(firstNumber)){
        firstNumber= prompt('Please enter your first number:');
    }
    else {
       break;
    }
}

let secondNumber = prompt('Please enter your second number', '3');

while (true) {
    if (secondNumber === '' || secondNumber === null || secondNumber === undefined || isNaN(secondNumber)){
        secondNumber = prompt('Please enter your second number:');
    }
    else{
       break;
    }
}

let operationProcess = prompt('Please enter your operation type', '*');

while (true) {
    if (operations[operationProcess]){
        break;
    }
    else {
        operationProcess = prompt('Please enter your operation type:');
    }
}


let answer;
/**
 * @return {number}
 */
function Calculate(a,b,operationProcess) {
    switch (operationProcess) {
        case '+' : answer = parseInt(a) + parseInt(b);break;
        case '-' : answer = parseInt(a) -  parseInt(b);break;
        case '/' : answer = parseInt(a) / parseInt(b);break;
        case '*' : answer = parseInt(a) *  parseInt(b);break;
    }


    return answer;

}

console.log(Calculate(firstNumber,secondNumber, operationProcess));