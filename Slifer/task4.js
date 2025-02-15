function task4(input) {

    let students = Number(input[0]);
    let index = 1;

    let currentGrade = Number(input[index]);
    index++;

    let counter1 = 0;
    let counter2 = 0;
    let counter3 = 0;
    let counter4 = 0;
    let averageGrade = 0;
    let sumGrades = 0;

    for (let i = 1; i <= students; i++) {

        if (currentGrade >= 5.00) {
            counter1++;
        } else if (currentGrade >= 4 && currentGrade <= 4.99) {
            counter2++;
        } else if (currentGrade >= 3 && currentGrade <= 3.99) {
            counter3++;
        } else if (currentGrade < 3) {
            counter4++;
        }
        sumGrades += currentGrade;

        currentGrade = Number(input[index]);
        index++;

    }
    group1 = (counter1 / students) * 100;
    group2 = (counter2 / students) * 100;
    group3 = (counter3 / students) * 100;
    group4 = (counter4 / students) * 100;
    averageGrade = sumGrades / students;

    console.log(`Top students: ${group1.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${group2.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${group3.toFixed(2)}%`);
    console.log(`Fail: ${group4.toFixed(2)}%`);
    console.log(`Average: ${averageGrade.toFixed(2)}`);

}
task4([
    "10",
    "3.00",
    "2.99",
    "5.68",
    "3.01",
    "4",
    "4",
    "6.00",
    "4.50",
    "2.44",
    "5"
]);