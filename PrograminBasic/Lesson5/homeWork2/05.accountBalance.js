function balanceAccount(params) {

    let command = params;
    let i = 0;
    let sum = 0;
    let currentNum = 0;

    while (command[i] !== "NoMoreMoney") {

        currentNum = Number(command[i]);
        if (currentNum < 0) {
            console.log(`Invalid operation!`);
            console.log(`Total: ${sum.toFixed(2)}`);
            return;
        }
        sum += Number(command[i]);
        console.log(`Increase: ${currentNum.toFixed(2)}`);

        i++;
    }

    console.log(`Total: ${sum.toFixed(2)}`);

}
balanceAccount(["120",
    "45.55",
    "-150",
])