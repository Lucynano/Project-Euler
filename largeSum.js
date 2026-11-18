function largeSum(arr) {
    let sumArr = 0n;

    arr.forEach(elem => {
        sumArr += BigInt(elem);
    });
    
    let firstTenDigits = Number(sumArr.toString().substring(0, 10));

    return firstTenDigits;
}

// Only change code above this line

const testNums = [
    '37107287533902102798797998220837590246510135740250',
    '46376937677490009712648124896970078050417018260538'
];

console.log(largeSum(testNums));
