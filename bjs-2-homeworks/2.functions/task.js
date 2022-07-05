// Задание 1
function getArrayParams(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  let avg;

  let counter = 0;

  for (let item of arr) {
    if (item > max) {
      max = item;
    }
    if (item < min) {
      min = item;
    }
    sum += item;
    counter++;
  }

  avg = Number((sum / counter).toFixed(2));

  return {min: min, max: max, avg: avg};
}

// Задание 2
function worker(arr) {
  let sum = 0;

  for (let item of arr) {
    sum += item;
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = 0;

  for (let item of arrOfArr) {
    const worker = func(item);

    if (worker > max) {
      max = worker;
    }
  }

  return max;
}

// Задание 3
function worker2(arr) {
  let min = arr[0];
  let max = arr[0];
  let diffMaxMin = 0;

  for (let item of arr) {
    if (item > max) {
      max = item;
    }
    if (item < min) {
      min = item;
    }
  }

  // Math.abs в данном случае использовать не обязательно
  return diffMaxMin = Math.abs(max - min);
}