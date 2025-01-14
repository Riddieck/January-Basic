function bonusScore(points) {

    let bonus = 0;

    if (points <= 100) {
        bonus = 5;
    } else if (points > 100 && points <= 1000) {
        bonus = points * 0.20;
    } else if (points > 1000) {
        bonus = points * 0.10;
    }

    if (points % 2 === 0) {
        bonus += 1;
    } else if (points % 10 === 5) {
        bonus += 2;
    }

    console.log(bonus);
    console.log(points + bonus);

}
bonusScore(20);
//bonusScore(175);
//bonusScore(2703);
//bonusScore(15875);