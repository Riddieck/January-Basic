function calculation(a, symbol, b) {

    let result = 0;

    if (symbol == "+") {
        result += a + b;
    } else if (symbol == "-") {
        result += a - b;
    } else if (symbol == "/") {
        result += a / b;
    } else if (symbol == "*") {
        result += a * b;
    }

    console.log(`${result.toFixed(2)}`);

}
calculation(5, "+", 10);
calculation(25.5, "-", 3);