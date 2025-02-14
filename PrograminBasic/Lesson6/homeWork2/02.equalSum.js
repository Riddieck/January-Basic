function equalSum(n1, n2) {

    let print = "";

    for (let i = n1; i <= n2; i++) {

        let currentNumber = "" + i;
        let evenSum = 0;
        let oddSum = 0;

        for (let j = 0; j < currentNumber.length; j++) {

            let currentSymbol = currentNumber[j];

            if (j % 2 === 0) {
                evenSum += Number(currentSymbol);
            } else {
                oddSum += Number(currentSymbol);
            }
        }

        if (evenSum === oddSum) {
            print += currentNumber + " ";
        }

        evenSum = 0;
        oddSum = 0;

    }
    console.log(print);

}