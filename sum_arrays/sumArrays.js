///// SUM ARRAYS CODE CHALLENGE /////

//  a solution that is one line but has no edge case testing
// const sumArrays = (arr1, arr2) => (parseInt(arr1.join('')) + parseInt(arr2.join(''))).toString().split('');

const sumArrays = (arr1, arr2) => {

    ////////// TEST CASES ///////////////
    if((!arr1.length) && (!arr2.length)) return [];

    if(!arr1.length) arr1.push(0);

    if(!arr2.length) arr2.push(0);

    for (let i=1; i< arr1.length; i++) {
        if (arr1[i] < 0) arr1[i] *= -1;
    }

    for (let i=1; i< arr2.length; i++) {
        if (arr2[i] < 0) arr2[i] *= -1;
    }

    if (arr1.some(isNaN)) return 'Numbers only please'
    if (arr2.some(isNaN)) return 'Numbers only please'

   sum = (parseInt(arr1.join('')) + parseInt(arr2.join('')))
   return sum.toString().split('').map(num => parseInt(num));

}

console.log(sumArrays([3, 2, 9], [-1,2]))
console.log(sumArrays([3,-2,9],['hi']));