const removeFromArray = function(array, ...value) { // ... specifies we can take an unlimited number of parameters and store it into an array
    let newArray = array;

    for (const params in value)
    {
        let i = 0;
        while (i < newArray.length)
        {
            if (newArray[i] === value[params])
            {
                newArray.splice(i,1); // remove the found index if the item was found
            }
            else
            {
                ++i;
            }
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
