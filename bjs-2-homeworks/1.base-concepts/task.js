'use strict';

function solveEquation(a, b, c) {
  const arr = [];
  const D = b ** 2 - 4 * a * c;

  if (D > 0) {
    arr.push((-b + Math.sqrt(D)) / (2 * a));
    arr.push((-b - Math.sqrt(D)) / (2 * a));
  } else if (D === 0) {
    arr.push(-b / (2 * a));
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  const percentNumber = Number(percent);
  const contributionNumber = Number(contribution);
  const amountNumber = Number(amount);

  function validDate(date) {
    if (Date.parse(date)) {
      return true;
    }
  }

  if (isNaN(percentNumber)) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  } else if (isNaN(contributionNumber)) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  } else if (isNaN(amountNumber)) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  } else if (!validDate(date)) {
    return 'Параметр "Срок ипотеки" содержит неправильное значение';
  } else {
    let totalAmount;

    const loanBody = amountNumber - contributionNumber;
    const monthlyPercent = percentNumber / 1200;
    const today = new Date();

    const diffDate = date.getMonth() - today.getMonth() + 12 * (date.getFullYear() - today.getFullYear());
    const monthlyPayment = loanBody * (monthlyPercent + monthlyPercent / ((1 + monthlyPercent) ** diffDate - 1));

    return (totalAmount = Number((monthlyPayment * diffDate).toFixed(2)));
  }
}
