function sumNumbers(params) {

    let primeNumber = Number(params[0]);
    let i = 1;
    let sum = 0;

    while (i < params.length) {
        sum += Number(params[i]);
        i++;

        if (sum >= primeNumber) {
            break;
        }
    }

    console.log(sum);

}
sumNumbers(["20",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6"
])