function findMinNumber(inputArray) {
    let minNumber = Number.POSITIVE_INFINITY; // Започваме с най-голямата възможна стойност
    let i = 0;

    while (i < inputArray.length && inputArray[i] !== "Stop") {
        let number = Number(inputArray[i]); // Преобразуваме входа в число

        if (!isNaN(number) && Number.isInteger(number)) {
            if (number < minNumber) {
                minNumber = number; // Запазваме най-малкото число
            }
        }

        i++; // Преминаваме към следващия елемент
    }

    console.log(minNumber);
}

// Тестване с примерни входни данни
findMinNumber(["999", "Stop"]);