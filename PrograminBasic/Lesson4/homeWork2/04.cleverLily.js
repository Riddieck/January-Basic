function numbersEnding(ages, washerMachine, toyPrice) {

    let money = 0;
    let toyCount = 0;
    let totalMoney = 0;
    let brotherTax = 0;

    for (let i = 1; i <= ages; i++) {

        if (i % 2 == 0) {
            money += 10;
            totalMoney += money;
            brotherTax ++;
        } else {
            toyCount++;
        }
    }

    toySum = toyPrice * toyCount;
    savedMoney = (totalMoney - brotherTax) + toySum;
    let diff = Math.abs(savedMoney - washerMachine);

    if (savedMoney >= washerMachine) {
        console.log(`Yes! ${diff.toFixed(2)}`);
    } else {
        console.log(`No! ${diff.toFixed(2)}`);
    }
}
numbersEnding(21, 1570.98, 3);