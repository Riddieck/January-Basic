function finishingBoat(budget, season, people) {

    let rentShip = 0;
    let discount = 0;
    let secoundDiscount = 0;

    if (season === "Spring") {
        rentShip = 3000;
    } else if (season === "Summer") {
        rentShip = 4200;
    } else if (season === "Autumn") {
        rentShip = 4200;
    } else if (season === "Winter") {
        rentShip = 2600;
    }

    if (people <= 6) {
        discount = rentShip * 0.10;
    } else if (people > 6 && people <= 11) {
        discount = rentShip * 0.15;
    } else if (people >= 12) {
        discount = rentShip * 0.25;
    }

    sum = rentShip - discount;

    if (season !== "Autumn") {
        if (people % 2 == 0) {
            secoundDiscount = sum * 0.05;
            sum = sum - secoundDiscount;
        }
    }

    let diff = Math.abs(budget - sum);

    if (budget >= sum) {
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
    }

}
finishingBoat(3000, "Summer", 12);
finishingBoat(3600, "Autumn", 6);
finishingBoat(2000, "Winter", 13);