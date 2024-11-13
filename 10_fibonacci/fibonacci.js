const fibonacci = function(value) {
    if (typeof(value) == "string") // do we have a string?
    {
        value = parseInt(value); // if so, parse to integer and store
    }
    if (value < 0)
    {
        return "OOPS";
    }
    else if (value == 0)
    {
        return 0;
    }
    else if (value == 1)
    {
        return 1;
    }
    else
    {
        let num1 = 0;
        let num2 = 1;
        let temp;

        for (let i = 1; i < value; i++)
        {
            temp = 0;
            temp += num1;
            temp += num2;
            num1 = num2;
            num2 = temp;
        }
        
        return temp;
    }
};

// Do not edit below this line
module.exports = fibonacci;
