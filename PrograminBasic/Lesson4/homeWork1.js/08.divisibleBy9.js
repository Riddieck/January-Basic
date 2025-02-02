function numbersDivisibleBy9(start, end) {

    let totalSum = 0;

    // Първо пресмятаме сумата на числата, които се делят на 9
    for (let num = start; num <= end; num++) {
        if (num % 9 === 0) {
            totalSum += num;
        }
    }

    // Отпечатваме сумата на числата
    console.log(`The sum: ${totalSum}`);

    // Сега отпечатваме самите числа
    for (let num = start; num <= end; num++) {
        if (num % 9 === 0) {
            console.log(num);
        }
    }

}
numbersDivisibleBy9(100, 200);