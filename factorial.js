function factorial(num) {
    if (num === 0 || num === 1) {
      return 1}
      else {
    return num * factorial(num-1);
      }
  }
  

  // Tests
  // console.log(factorial(0)); // => 1
  console.log(factorial(5)); // => 120
  console.log(factorial(10)); // => 3628800

  