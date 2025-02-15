function trainTheTrainers(input) {

    let judges = Number(input[0]);

    let index = 1;
    let command = input[index];
    index++;
    let counter = 0;
    let totalGrade = 0;
    let presentationGrade = 0;

    while (command !== "Finish") {

        let presentationName = command;
        counter++;
        let currentGrade = 0;

        for (let i = 1; i <= judges; i++) {
            let command1 = Number(input[index]);
            currentGrade += command1;
            index++;

        }

        presentationGrade = currentGrade / judges;
        console.log(`${presentationName} - ${presentationGrade.toFixed(2)}.`);

        totalGrade += presentationGrade;
        command = input[index];
        index++;

    }
    totalGrade = totalGrade / counter;
    console.log(`Student's final assessment is ${totalGrade.toFixed(2)}.`);

}