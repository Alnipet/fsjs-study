function cachingDecoratorNew(func) {
  const cash = [];

  function wrapper(...args) {
    const hash = args.join(',');

    const index = cash.findIndex((elem) => {
      return hash === Object.keys(elem)[0];
    })

    if (index !== -1) {
      console.log("Из кэша: " + cash[index][hash]);
      return "Из кэша: " + cash[index][hash];
    }
    else {
      const result = func(...args);
      cash.push({[hash]: result}); 

      if (cash.length > 5) {
        cash.shift();
      }
      
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;  
    }
  }

  return wrapper;
}


function debounceDecoratorNew(func, ms) {
  let timeout;
  let flag = false;
  
  function wrapper(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(...args);
    }, ms)

    if (flag === false) {
      func(...args);
      flag = true;
    }
  }

  return wrapper
}


function debounceDecorator2(func, ms) {
  let timeout;
  let flag = false;

  function wrapper(...args) {
    wrapper.history++;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(...args);
    }, ms)

    if (flag === false) {
      func(...args);
      flag = true;
    }
    console.log(wrapper.history)
  }
  
  wrapper.history = 0;

  return wrapper
}
