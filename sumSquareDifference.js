function sumSquareDifference(n) {
    let squareOfTheSum = ((n * (n + 1)) / 2) ** 2;
    let sumOfTheSquares = (n * (n + 1) * ((2 * n) + 1)) / 6
    return squareOfTheSum - sumOfTheSquares;
  }
  
sumSquareDifference(100);