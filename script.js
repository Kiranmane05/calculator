const display = document.getElementById('display');

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function deleteChar() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}

// Keyboard support
document.addEventListener('keydown', function (event) {
  const key = event.key;

  if (!isNaN(key)) {
    appendValue(key); // digits
  } else if (['+', '-', '*', '/'].includes(key)) {
    appendValue(key); // operators
  } else if (key === 'Enter' || key === '=') {
    event.preventDefault();
    calculate();
  } else if (key === 'Backspace') {
    deleteChar();
  } else if (key === 'Escape') {
    clearDisplay();
  } else if (key === '.') {
    appendValue('.');
  }
});
