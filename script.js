let displayValue = '';
let num1 = '';
let num2 = '';
let operator = '';

function appendToDisplay(value){
    if (value === '=' && num1 !== '' && num2 !== '') {
        calculate()
        return;
    }

    if (value === 'C') {
        clearDisplay()
        return;
    }

    displayValue += value;
    document.getElementById('display').value = displayValue;

    if (!isNaN(value)) {
        if (!operator){
            num1 += value;
        } else {
            num2 += value;
        }
    } else {
        if (value !== '.' && !operator){
            operator = value;
        }
    }
}

function calculate() {
    let result;
    switch(operator) {
    case'+':
        result = parseFloat(num1) + parseFloat(num2);
        break;
    case'-':
        result = parseFloat(num1) - parseFloat(num2);
        break;
    case'*':
        result = parseFloat(num1) * parseFloat(num2);
        break;
    case'/':
        result = parseFloat(num1) / parseFloat(num2);
        break;
    }

    document.getElementById('display').value = result;
    num1 = result.toStrinf();

    num2 = '';
    operator = '';
}

function clearDisplay() {
    displayValue = '';
    num1 = '';
    num2 = '';
    operator = '';
    document.getElementById('display').value = displayValue;
}