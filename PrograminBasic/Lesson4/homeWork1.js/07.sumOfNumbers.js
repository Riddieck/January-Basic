function sumDigits(numberAsString) {

    let sum = 0; // Инициализираме сумата

    for (let i = 0; i < numberAsString.length; i++) {
        sum += Number(numberAsString[i]); // Преобразуваме текущия символ в число и го добавяме към сумата
    }

    console.log(`The sum of the digits is:${sum}`); // Отпечатваме резултата
}

// Примерно извикване на функцията
sumDigits("1234"); // Output: 10