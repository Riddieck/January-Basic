function sumOfTwo(x1, x2, magicNumber) {

    let combination = 0;
    let result = 0;
    for (let i = x1; i <= x2; i++) {
        for (let j = x1; j <= x2; j++) {
            result = i + j;
            combination++;
            if (result === magicNumber) {
                console.log(`Combination N:${combination} (${i} + ${j} = ${result})`);
                return;
            }
        }
    }
    if (result !== magicNumber) {
        console.log(`${combination} combinations - neither equals ${magicNumber}`);
    }
}
sumOfTwo(1, 10, 5);
sumOfTwo(23, 24, 20);
sumOfTwo(88, 888, 2000);