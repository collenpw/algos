// You will be given an array of all the family members' ages, in any order. 
// The ages will be given in whole numbers only, so a baby of 5 months, will have an ascribed ‘age’ of 0.
// Return a new array with [youngest age, oldest age, difference between the youngest and oldest age].

const ageDifference = (ages) => {
    const youngest = Math.min(...ages.map(age => age));
    const oldest = Math.max(...ages.map(age => age));
    return ageArr = [youngest, oldest, oldest - youngest];
}

console.log(ageDifference([57, 99, 14, 32]));