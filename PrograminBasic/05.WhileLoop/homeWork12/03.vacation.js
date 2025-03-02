function vacation(arr) {

    let neededMoney = Number(arr[0]);
    let availableMoney = Number(arr[1]);
    let spendCountDays = 0;
    let days = 0;

    let i = 2;

    while (i < arr.length) {

        let word = arr[i];
        let sum = Number(arr[i + 1]);
        days++;

        if (word === "save") {
            availableMoney += sum;
            spendCountDays = 0;

        } else if (word === "spend") {
            spendCountDays++;

            if (spendCountDays >= 5) {
                console.log(`You can't save the money.`);
                console.log(days);
                return;
            }

            availableMoney -= sum;
            if (availableMoney < 0) {
                availableMoney = 0;
            }
        }

        i += 2;

    }

    if (availableMoney >= neededMoney) {
        console.log(`You saved the money for ${days} days.`);
    }

}
vacation(["2000",
    "1000",
    "spend",
    "1200",
    "save",
    "2000"
]);
vacation(["110",
    "60",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
]);
vacation(["250",
    "150",
    "spend",
    "50",
    "spend",
    "50",
    "save",
    "100",
    "save",
    "100",
]);