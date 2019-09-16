const multiply = (value, multiplyConstant = 321) => {
  if (multiplyConstant === 0) return 0;

  /* Add value one by one */
  if (multiplyConstant > 0)
    return value + multiply(value, multiplyConstant - 1);
};

module.exports = multiply;
