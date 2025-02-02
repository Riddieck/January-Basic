function numbersEnding(input) {

    let actor = input[0];
    let points = Number(input[1]);
    let judges = input[2];
    let currentPoints = 0;

    for (let i = 3; i < input.length - 1; i += 2) {

        let nameOfJudge = (input[i].length);
        let judgesPoints = Number((input[i + 1]));

        currentPoints = points + ((nameOfJudge * judgesPoints) / 2);
        points = currentPoints;

        if (points > 1250.5) {
            console.log(`Congratulations, ${actor} got a nominee for leading role with ${points.toFixed(1)}!`);
            return;
        }

    }

    console.log(`Sorry, ${actor} you need ${(1250.5 - points).toFixed(1)} more!`);

}
numbersEnding(["Zahari Baharov", "205", 4,
    "Johnny Depp", "45",
    "Will Smith", "29",
    "Jet Lee", "10",
    "Matthew Mcconaughey", "39"]);