function sumSeconds(sec1, sec2, sec3) {

    let totalTime = sec1 + sec2 + sec3;
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }
}
sumSeconds(35, 45, 44);
//sumSeconds(22, 7, 34);
//sumSeconds(50, 50, 49);