/* Data:
  a < b < c
  a2 + b2 = c2
  a + b + c = n

  To solve:
  abc = ?

  Approaches:
  . a < b and a < c => a + a < b + c => a + a + a < a + b + c => 3a < n => a < n / 3

  . c = n - a - b => a2 + b2 = (n - a - b)2 => b = (n2 - 2na) / 2 (n - a) 
*/
function specialPythagoreanTriplet(n) {
  for(let a = Math.floor(n / 3); a > 1; a--) {
    let b = (n**2 - 2 * n * a) / (2 * (n - a));
    if(!Number.isInteger(b)) continue;

    let c = n - b - a;
    if(a < b && (a**2 + b**2) === c**2) return a * b * c;
  }
  return -1;
}

specialPythagoreanTriplet(1000);