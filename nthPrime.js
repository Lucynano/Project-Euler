function nthPrime(n) {
    let res, i = 2, j = 1;
    while (j <= n) {
        let isPrime = true;
        if (i % 2 === 0 && i !== 2) {
            isPrime = false;
        }
        else {
            for (let j = 3; j * j <= i; j += 2) {
                if (i % j === 0) {
                    isPrime = false;
                    break;
                }
            }
        }
        if (isPrime) {
            res = i;
            j++;
        }
        i++;
    }
    return res;
}

console.log(nthPrime(10001));


