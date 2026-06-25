function isPrime(x) {
    if (x === 2) return true;
    else if (x % 2 === 0) return false;
    else {
        for (let i = 3; i * i <= x; i += 2) {
            if (x % i === 0) return false;
        }
        return true;
    } 
}

function primeSummation(n) {
    let primeSum = 2;
    let i = 3;

    while (i < n) {
        if (isPrime(i)) primeSum += i;
        i += 2;
    }

    return primeSum;
}

console.log(primeSummation(2000000));