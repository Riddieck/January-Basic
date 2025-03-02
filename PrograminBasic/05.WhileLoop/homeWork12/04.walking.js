function walking(arr) {

    let currentSteps = 0;
    let sumSteps = 0;
    let i = 0;

    while (i < arr.length) {

        let command = arr[i];

        if (command === "Going home") {
            currentSteps = Number(arr[i + 1]);
            sumSteps += currentSteps;

            if (sumSteps > 10000) {
                console.log(`Goal reached! Good job!`);
                console.log(`${sumSteps - 10000} steps over the goal!`);
                return;
            } else {
                console.log(`${10000 - sumSteps} more steps to reach goal.`);
                return;
            }
        }
        currentSteps = Number(command);
        sumSteps += currentSteps;

        i++;
    }

    if (sumSteps > 10000) {
        console.log(`Goal reached! Good job!`);
        console.log(`${sumSteps - 10000} steps over the goal!`);
    } else {
        console.log(`${10000 - sumSteps} more steps to reach goal.`);
    }

}
walking(["1500", "300", "2500", "3000", "Going home", "200"]);
//walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"]);