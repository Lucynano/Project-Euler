function largestPrimeFactor(number) {
  let largestPrime = number
  for(let i = 2; i <= number; ++i) {
      let prime = true
      if(i === 2) {
          prime = true
      }
      else if(i % 2 === 0) {
          prime = false
      }
      else {
          for(let j = 3; j <= Math.trunc(Math.sqrt(i)) + 1; j += 2) {
              if(i % j === 0) {
                  prime = false
                  break
              }
          } 
      }
      if(prime) {
          while(largestPrime % i == 0) {
              largestPrime /= i
          }
          if(largestPrime == 1) {
              return i
          }
      }
  }
}

largestPrimeFactor(13195);