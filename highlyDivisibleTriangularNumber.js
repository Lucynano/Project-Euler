function divisibleTriangleNumber(n) {
    let i = 1;
    let triangleNbr = 0;
    while (true) {
        triangleNbr += i;
        let divisors = 0;
        for (let j = 1; j * j <= triangleNbr; j++) {
            if (triangleNbr % j == 0) {
                if (j * j == triangleNbr) divisors++;
                else divisors += 2;
            }
        }
        if (divisors > n) break;
        else i++;
    }
    return triangleNbr;
}

console.log(divisibleTriangleNumber(4));
