const largestNumber = (num) => {
    if (num === 0) return 0;
    
    if(num > 0) return parseInt('9'.repeat(num));
    
    else if (num < 0) return parseFloat('.' + '9'.repeat(num * -1));

}
console.log(largestNumber(7));
console.log(largestNumber(0));
console.log(largestNumber(-1));
console.log(largestNumber(-9));
console.log(largestNumber(14));