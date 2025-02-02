function graduation(params) {

    let name = params[0];
    let command = 1;
    let yearsGrade = 0;
    let count = 0;

    while (command < params.length) {

        let currentGrade = Number(params[command]);
        count++;

        if (currentGrade <= 2) {
            console.log(`${name} has been excluded at ${count} grade`);
            return;
        }
        if ((yearsGrade / count) >= 4) {
            console.log(`${name} graduated. Average grade: ${(yearsGrade / count).toFixed(2)}`);
        }

        yearsGrade += currentGrade;
        command++;
    }


}
graduation(["Gosho",
    "5",
    "5.5",
    "6",
    "5.43",
    "5.5",
    "6",
    "5.55",
    "5",
    "6",
    "6",
    "5.43",
    "5"
])