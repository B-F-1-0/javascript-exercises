const add = function(digit1, digit2) {
  digit1 += digit2;
  return digit1;
};

const subtract = function(digit1, digit2) {
	digit1 -= digit2;
  return digit1;
};

const sum = function(numberarray) {
	if (numberarray.length == 0)
  {
    return 0;
  }
  else 
  {
    let temp = 0;
    numberarray.forEach((element) => {temp += element}); // for each element in the array, add it to temp

    return temp;
  }
};

const multiply = function(numberarray) {
    if (numberarray.length == 0)
    {
      return 0;
    }
    else 
    {
      let temp = 1; // set to 1 so base number can be multiplied properly
      numberarray.forEach((element) => {temp *= element}); // for each element in the array, multiply it by temp
  
      return temp;
    }
};

const power = function(digit1, digit2) {
	digit1 = digit1 ** digit2;
  return digit1;
};

const factorial = function(startnumber) {
	if (startnumber == 0)
  {
    return 1;
  }
  
  let temp = startnumber;
  for (let i = startnumber - 1; i > 0; i--)
  {
    temp *= i;
  }
  return temp;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
