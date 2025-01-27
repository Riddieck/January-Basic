function evenPowers(n) {

    // Увеличаваме индекса с 2, за да вземем само четните степени
    for (let i = 0; i <= n; i += 2) {

        // Изчисляваме 2^i и го отпечатваме
        console.log(Math.pow(2, i));
    }
}
evenPowers(7)