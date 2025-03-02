function numbersEnding(input) {

    let tabs = input[0];
    let salary = input[1];
    let tax = 0;

    for (let i = 2; i <= input.length - 1; i++) {

        let currentPlace = input[i];

        if (currentPlace === "Facebook") {
            tax += 150;
        } else if (currentPlace === "Instagram") {
            tax += 100;
        } else if (currentPlace === "Reddit") {
            tax += 50;
        }
    }

    if (tax < salary) {
        console.log(`${salary - tax}`);
    } else {
        console.log(`You have lost your salary.`);
    }
}
numbersEnding([3, 500,
    "Facebook",
    "Stackoverflow.com",
    "softuni.bg"]);