function lunchBreak(nameOfMovie, movieDuration, restDuration) {

    let lanchTime = restDuration * 0.125;
    let restTime = restDuration * 0.25;

    let leftTime = restDuration - lanchTime - restTime;

    if (movieDuration <= leftTime) {
        console.log(`You have enough time to watch ${nameOfMovie} and left with ${Math.ceil(leftTime - movieDuration)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${nameOfMovie}, you need ${Math.ceil(movieDuration - leftTime)} more minutes.`);
    }
}
lunchBreak("GameOfThrones", 60, 96);
//lunchBreak("Teen Wolf", 48, 60);