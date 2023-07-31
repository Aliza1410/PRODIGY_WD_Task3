let currentInput = '0';
let operator = null;
let previousInput = null;

const display = document.getElementById('display');

function handleButton(value) {
  if (currentInput === '0') {
    currentInput = value;
  } else {
    currentInput += value;
  }
  display.textContent = currentInput;
}

function clearDisplay() {
  currentInput = '0';
  operator = null;
  previousInput = null;
  display.textContent = currentInput;
}

function calculate() {
  if (operator && previousInput !== null) {
    const currentNumber = parseFloat(currentInput);
    const previousNumber = parseFloat(previousInput);
    let result;

    switch (operator) {
      case '+':
        result = previousNumber + currentNumber;
        break;
      case '-':
        result = previousNumber - currentNumber;
        break;
      case '*':
        result = previousNumber * currentNumber;
        break;
      case '/':
        result = previousNumber / currentNumber;
        break;
      default:
        return;
    }

    currentInput = result.toString();
    operator = null;
    previousInput = null;
    display.textContent = currentInput;
  }
}

function handleButton(value) {
  if (value === 'C') {
    clearDisplay();
  } else if (value === '=') {
    calculate();
  } else if (value === '+' || value === '-' || value === '*' || value === '/') {
    operator = value;
    previousInput = currentInput;
    currentInput = '';
  } else {
    handleButtonNumber(value);
  }
}

function handleButtonNumber(value) {
  if (currentInput === '0') {
    currentInput = value;
  } else {
    currentInput += value;
  }
  display.textContent = currentInput;
}

document.addEventListener('keydown', function(event) {
  const key = event.key;
  if (/^[0-9\+\-\*\/=]$/.test(key)) {
    event.preventDefault();
    handleButton(key);
  } else if (key === 'Enter') {
    event.preventDefault();
    handleButton('=');
  } else if (key === 'Escape') {
    event.preventDefault();
    handleButton('C');
  }
});
