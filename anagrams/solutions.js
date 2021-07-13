const strA = 'Hi there';
const strB = 'thereHi';

const checkForAnagram = (strA, strB) => {
    const strASort = strA.toLowerCase().split('').sort();
    const strBSort = strB.toLowerCase().split('').sort();

    while(strASort[0].charCodeAt(0) < 97) {
        strASort.splice(0, 1);
    }
    while(strASort[strASort.length - 1].charCodeAt(0) > 122) {
        strASort.splice(strASort.length - 1, 1);
    }
    while(strBSort[0].charCodeAt(0) < 97) {
        strBSort.splice(0, 1);
    }
    while(strBSort[strBSort.length - 1].charCodeAt(0) > 122) {
        strBSort.splice(strBSort.length - 1, 1);
    }
    const strAA = strASort.join('');
    const strBB = strBSort.join('');

    console.log(strAA, strBB);

    if (strAA === strBB) return true;

    return false;
}

console.log(checkForAnagram(strA, strB));

console.log(checkForAnagram('RA""IL! SAFETY!', 'fairy t""ales'));