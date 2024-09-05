const reverseString = function(string) {
    let newString = "";
    for (let i = 1; i < string.length + 1; i++)
    {
        newString = newString + string[string.length - i];
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
