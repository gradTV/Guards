const chai = require('chai');
const assert = chai.assert;
const factorial = require('./factorial');

describe('Функція обчислення факторіалу', function () {
  it('Факторіал 0 має бути 1', function () {
    assert.equal(factorial(0), 1);
  });

  it('Факторіал 1 має бути 1', function () {
    assert.equal(factorial(1), 1);
  });

  it('Факторіал 5 має бути 120', function () {
    assert.equal(factorial(5), 120);
  });

  it('Факторіал 10 має бути 3628800', function () {
    assert.equal(factorial(10), 3628800);
  });

  // Додайте інші тести за потребою

  it('Факторіал негативного числа має бути undefined', function () {
    assert.isUndefined(factorial(-5));
  });

  it('Факторіал нецілого числа має бути undefined', function () {
    assert.isUndefined(factorial(5.5));
  });
});
