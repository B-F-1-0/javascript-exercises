const findTheOldest = function(people) {
    let startyear;
    let deathyear;
    let indexOfOldest = 0;
    let ageOfOldest = 0;
    people.forEach((person, index) => {
        if (person.yearOfDeath == undefined)
        {
            deathyear = new Date().getFullYear();
        }
        else
        {
            deathyear = person.yearOfDeath;
        }
        startyear = person.yearOfBirth;
        if ((deathyear - startyear) > ageOfOldest)
        {
            indexOfOldest = index;
            ageOfOldest = (deathyear - startyear);
        }
    })
    return people[indexOfOldest];
};

// Do not edit below this line
module.exports = findTheOldest;
