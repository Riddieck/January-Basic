function numbersEnding(num) {

    for (let i = 1; i <= 10; i++) {
        let result = i * num;
        console.log(`${i} * ${num} = ${result}`);
    }
}
numbersEnding(5);