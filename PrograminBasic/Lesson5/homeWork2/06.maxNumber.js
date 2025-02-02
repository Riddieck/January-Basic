function findMaxNumber(inputArray) {

    let maxNumber = Number.MIN_SAFE_INTEGER; // Започваме с най-малката възможна стойност
    let i = 0;

    while (i < inputArray.length && inputArray[i] !== "Stop") {
        let number = Number(inputArray[i]); // Преобразуваме входа в число
        
        if (!isNaN(number) && Number.isInteger(number)) {
            if (number > maxNumber) {
                maxNumber = number; // Запазваме най-голямото число
            }
        }
        
        i++; // Преминаваме към следващия елемент
    }

    console.log(maxNumber);
}
// Тестване с примерни входни данни
findMaxNumber(["-1", "-2", "Stop"]);