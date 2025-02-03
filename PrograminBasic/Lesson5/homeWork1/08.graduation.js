function graduation(arr) {

    let name = arr[0];
    let i = 1;
    let sumGrades = 0;
    let fail = 0;
    let currentGrade = 0;

    while (i < arr.length) {

        if (arr[i] < 4.00) {
            fail++;
            if (fail > 1) {
                console.log(`${name} has been excluded at ${currentGrade} grade`);
                return;
            }
        }
        currentGrade++;

        sumGrades += Number(arr[i]);
        i++;
    }

    averageGrade = sumGrades / currentGrade;
    console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);

}
graduation(["Mimi",
    "5",
    "6",
    "5",
    "6",
    "5",
    "6",
    "6",
    "2",
    "3",
    "6",
    "5.43",
    "5"
]);