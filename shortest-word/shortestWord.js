///// SHORTEST WORD CODE CHALLENGE /////
const findShort = (str) => Math.min(...str.split(' ').map((word) => word.length));

console.log(findShort('Aha the Super Bowl is gonna be awesome'));