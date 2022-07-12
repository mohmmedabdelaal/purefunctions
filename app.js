function add(num1, num2) {
  return num1 + num2;
}

// function sendDataToServer() {}

console.log(add(1, 5)); // 6
console.log(add(12, 15)); // 27

function addRandom(num1) {
  return num1 + Math.random();
}

console.log(addRandom(5));

let previousResult = 0;

function addMoreNumbers(num1, num2) {
  const sum = num1 + num2;
  previousResult = sum;
  return sum;
}

console.log(addMoreNumbers(1, 5));

const hobbies = ['Sports', 'Cooking'];

function printHobbies(h) {
  h.push('NEW HOBBY');
  console.log(h);
}

printHobbies(hobbies);

// pure function

/// factory function

function calculateVatAmount(tax) {
  function calculateTax(amount) {
    return amount * tax;
  }
  return calculateTax;
}

const vatAmount = calculateVatAmount(0.145);
const companyWage = calculateVatAmount(0.23);

console.log(vatAmount(100));
console.log(companyWage(200));
