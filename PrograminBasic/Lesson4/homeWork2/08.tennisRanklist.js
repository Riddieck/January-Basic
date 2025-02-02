function tennisRankList(input) {

    let tournamets = Number(input[0]);
    let scores = Number(input[1]);
    let winScores = 0;
    let winGames = 0;

    for (let i = 2; i <= input.length - 1; i++) {

        let currentType = input[i];

        if (currentType === "W") {
            winScores += 2000;
            winGames++;
        } else if (currentType === "F") {
            winScores += 1200;
        } else if (currentType === "SF") {
            winScores += 720;
        }
    }

    totalPoints = winScores + scores;
    averagePoints = Math.floor(winScores / tournamets);
    procentage = (winGames / tournamets) * 100;

    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${averagePoints}`);
    console.log(`${procentage.toFixed(2)}%`);

}
tennisRankList(["4",
    "750",
    "SF",
    "W",
    "SF",
    "W",]);