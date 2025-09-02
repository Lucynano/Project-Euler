// Brute force
function fiboEvenSum(n) {
  let sum = 2
  let firstTerm = 1
  let secondTerm = 2
  
  while(firstTerm + secondTerm <= n) {
    if((firstTerm + secondTerm) % 2 == 0) sum += firstTerm + secondTerm
    let temp = firstTerm
    firstTerm = secondTerm
    secondTerm += temp
  }
  return sum;
}

// We use E(k) = 4 * E(k-1) + E(k-2)
// ex: E(3) = 4 * E(2) + E(1) = 4 * 8 + 2 = 34
function fiboEvenSum(n) {
  let sum = 0;
  let firstTerm = 2; // first term of fibo even nbr
  let secondTerm = 8; // second term of fibo even nbr

  while (a <= n) {
    sum += firstTerm;
    let nextTerm = 4 * secondTerm + firstTerm; // next term of fibo even number
    firstTerm = secondTerm;
    secondTerm = nextTerm;
  }

  return sum;
}

