function largestPrimeFactor(number) {
    let res = number
        while(res > 2 && res % 2 === 0) {
            res /= 2
        }
    
        for(let i = 3; i * i <= res; i += 2) {
            while(res % i === 0) {
                res /= i
            }
        }
    return res
}

console.log(largestPrimeFactor(13195))