function isPalindrome(num) {
    const s = String(num)
    return s === s.split("").reverse().join("")
}

function largestPalindromeProduct(n) {
    let lower_limit = Math.pow(10, n - 1)
    let upper_limit = Math.pow(10, n) - 1
    let maxPalindrome = 0
  
    for(let i = upper_limit; i >= lower_limit; i--) {
        if(i * i < maxPalindrome) break

        for(let j = i; j >= lower_limit; j--) {
            let product = i * j
            
            if(product <= maxPalindrome) break
            
            if(isPalindrome(product)) maxPalindrome = product
              
            
        }
    }

    return maxPalindrome
}

largestPalindromeProduct(3)