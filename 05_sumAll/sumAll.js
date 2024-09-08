const sumAll = function(num1, num2) {
    // check if either are not a number or a negative; if so abort
    if (typeof num1 != "number" || typeof num2 != "number" || num1 < 0 || num2 < 0)
    {
        return "ERROR";
    }

    // check if integer, otherwise abort
    if (num1 % 1 != 0 || num2 % 1 != 0) {
        return "ERROR";
    }

    // otherwise continue
    let sum = 0;

    // find which number is larger and set it as the end
    let min = 0;
    let max = 0;
    if (num2 < num1)
    {
        max = num1;
        min = num2;
    }
    else {
        max = num2;
        min = num1;
    }

    // now loop normally
    for (let i = min; i <= max; i++)
    {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
