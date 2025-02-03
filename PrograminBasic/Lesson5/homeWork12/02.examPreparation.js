function examPreparation(arr) {

    let failGrades = Number(arr[0]);
    let i = 1;
    let totalGrades = 0;
    let problems = 0;
    let poorGrades = 0;
    let taskName = "";

    while (i < arr.length) {

        if (arr[i] === "Enough") {
            break;
        }

        taskName = arr[i];
        i++;

        let grade = Number(arr[i]);
        if (grade <= 4) {
            poorGrades++;
            if (poorGrades === failGrades) {
                console.log(`You need a break, ${poorGrades} poor grades.`);
                return;
            }
        }

        totalGrades += grade;
        i++;

        problems++;
    }

    averageGrade = totalGrades / problems;

    if (averageGrade > 4) {
        console.log(`Average score: ${averageGrade.toFixed(2)}`);
        console.log(`Number of problems: ${problems}`);
        console.log(`Last problem: ${taskName}`);
    } else {
        console.log(`You need a break, ${poorGrades} poor grades.`);
    }

}
//examPreparation(["3",
//    "Money",
//    "6",
//    "Story",
//    "4",
//    "Spring Time",
//    "5",
//    "Bus",
//    "6",
//    "Enough"
//])
examPreparation(["2",
    "Income",
    "3",
    "Game Info",
    "6",
    "Best Player",
    "4"
])