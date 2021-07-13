// Make a function that that squares each number passed into it from an array, and sums the results.

const arr = [4, 2, 2];

const sumOfSquares = (arr) => {
    let sum = 0;
    arr.forEach((num) => {sum+= num*num})
    return sum;
}

console.log(sumOfSquares(arr));

// Make a function that takes one argument, a two dimensional array, where all the arrays are the same length, and returns the greatest sum of the numbers by row, column and diagonal.

const arr2 = [ [10, 20, 30],
               [40, 50, 60],
               [70, -80, 90] ];

const loopTheLoop = (arr) => {
    let horizontal = [];
    let vertical = [];
    let diagonal = [];

    // SUM THE HORIZONTAL VALUES
    for(let i=0; i<arr[0].length; i++) {
        let temp = 0;
        arr[i].forEach((num) => temp+= num);
        horizontal.push(temp);
    }

    // SUM THE VERTICAL VALUES
    for (let j=0; j<arr[0].length; j++) {
        let temp = 0;
        for (let k=0; k<arr[j].length; k++) {
            temp += arr2[k][j];
        }
        vertical.push(temp);
    }

    // SUM THE DIAGONAL VALUES
    let diagonalTemp = 0;
    for(let l=0; l<arr[0].length; l++) {
        diagonalTemp += arr[l][l]
    }
    diagonal.push(diagonalTemp);

    diagonalTemp = 0
    for(m=0; m<arr[0].length; m++) {
        for(n=arr[0].length-1; n>=0; n--) {
            diagonalTemp+= arr[m][n];
            m++;
        }
    }
    diagonal.push(diagonalTemp)

    const maxHorizontal = Math.max(...horizontal);
    const maxVertical = Math.max(...vertical);
    const maxDiagonal = Math.max(...diagonal);

    // console.log(maxHorizontal, maxVertical, maxDiagonal);

    return(`The max horizonal sum is ${maxHorizontal}, the max vertical sum is ${maxVertical}, and the max diagonal sum is ${maxDiagonal}`);    
}

console.log(loopTheLoop(arr2));