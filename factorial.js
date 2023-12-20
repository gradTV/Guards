function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Пример использования
const result = factorial(5);
console.log(`Факториал числа 5: ${result}`);
