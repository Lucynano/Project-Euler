function isPrime(number) {
    if(number <= 1) return false
    if(number === 2) return true
    else if(number % 2 == 0) return false
    else {
        for(let i = 3; i * i <= number; i += 2) {
            if(number % i === 0) return false
        }
    }
    return true
}

function smallestMult(n) {
    let sm = 1
    for(let i = 2; i <= n; i++) {
        if(isPrime(i)) {
            let j = i
            while(j * i <= n) j *= i
            sm *= j
        }
    }
    return sm
}
  
smallestMult(20)


