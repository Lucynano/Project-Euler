function sumDivisibleBy(n, number) {
    const p = Math.floor((number - 1) / n)
    return n * p * (p + 1) / 2
}

function multiplesOf3Or5(number) {
    return sumDivisibleBy(3, number) + sumDivisibleBy(5, number) - sumDivisibleBy(15, number)
  }
  
multiplesOf3Or5(1000);
