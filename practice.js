// function to check if anagrams are equal

function anagramCheck(x, y){
    str = x.toLowerCase().replace(/\s/g, "").split("").sort().join("");
    str2 = y.toLowerCase().replace(/\s/g, "").split("").sort().join("");
      console.log(str, str2)
    return str === str2;
  }
  
  console.log(anagramCheck("Hello World", "dlroW olleH")); // => true
  console.log(anagramCheck("Imtkheing'", "I'm the king")); // => true
  console.log(anagramCheck("test", "tesd")); // => false
  console.log(anagramCheck("tom riddle", "tom Riddle"))