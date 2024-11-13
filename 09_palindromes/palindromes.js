const palindromes = function (givenString) {
    let normalString = givenString;

    // cleanup string
    normalString = normalString.replaceAll(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,""); // remove special characters
    normalString = normalString.replaceAll(" ",""); // remove whitespace
    normalString = normalString.toLowerCase();

    // reverse the string
    let reversedString = "";
    for (let i = normalString.length - 1; i >= 0; i--)
    {
        reversedString = reversedString.concat(normalString[i]);
    }

    if (reversedString == normalString)
    {
        return true;
    }
    else
    {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
