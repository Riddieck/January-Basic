function operationBetweenNums(n1, n2, symbol) {

    let result = 0;

    if (symbol === "/" || symbol === "%") {
        if (n2 == 0) {
            console.log(`Cannot divide ${n1} by zero`);
            return;
        }
    }

    switch (symbol) {
        case "+":
            result = n1 + n2;
            if (result % 2 == 0) {
                console.log(`${n1} ${symbol} ${n2} = ${result} - even`);
            } else {
                console.log(`${n1} ${symbol} ${n2} = ${result} - odd`);
            }
            break;
        case "-":
            result = n1 - n2;
            if (result % 2 == 0) {
                console.log(`${n1} ${symbol} ${n2} = ${result} - even`);
            } else {
                console.log(`${n1} ${symbol} ${n2} = ${result} - odd`);
            }
            break;
        case "*":
            result = n1 * n2;
            if (result % 2 == 0) {
                console.log(`${n1} ${symbol} ${n2} = ${result} - even`);
            } else {
                console.log(`${n1} ${symbol} ${n2} = ${result} - odd`);
            }
            break;
        case "/":
            result = n1 / n2;
            if (result % 2 == 0) {
                console.log(`${n1} ${symbol} ${n2} = ${result.toFixed(2)}`);
            } else {
                console.log(`${n1} ${symbol} ${n2} = ${result.toFixed(2)}`);
            }
            break;
        case "%":
            result = n1 % n2;
            console.log(`${n1} ${symbol} ${n2} = ${result}`);
            break;
    }

}
operationBetweenNums(10, 12, "+");
operationBetweenNums(10, 1, "-");
operationBetweenNums(7, 3, "*");
operationBetweenNums(123, 12, "/");
operationBetweenNums(112, 0, "/");
operationBetweenNums(10, 3, "%");
