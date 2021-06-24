// You have an array of numbers. Your task is to sort ascending odd numbers but even numbers must be on their places.

// Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

// Example:

// sortArray([5, 3, 2, 8, 1, 4]) 
//  expected return: [1, 3, 2, 8, 5, 4]

const sortOdd = (arr) => {

    const sortedArr = [...arr]

    sortedArr.sort();

    for (let i = 0; i < sortedArr.length; i++) {

        if (sortedArr[i] % 2 === 0) {
            sortedArr.splice(i, 1)
        }
    }

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] % 2 === 0) {
            sortedArr.splice(i, 0, arr[i] )
        }       
    }
}

console.log(sortOdd([5, 3, 2, 8, 1, 4]));