function newHouse(flowers, qty, budget) {

    let sum = 0;
    switch (flowers) {
        case "Roses":
            sum += qty * 5;
            if (qty > 80) {
                sum *= 0.90;
            }
            break;
        case "Dahlias":
            sum += qty * 3.80;
            if (qty > 90) {
                sum *= 0.85;
            }
            break;
        case "Tulips":
            sum += qty * 2.80;
            if (qty > 80) {
                sum *= 0.85;
            }
            break;
        case "Narcissus":
            sum += qty * 3;
            if (qty < 120) {
                sum *= 1.15;
            }
            break;
        case "Gladiolus":
            sum += qty * 2.50;
            if (qty < 80) {
                sum *= 1.20;
            }
            break;
    }

    if (budget >= sum) {
        console.log(`Hey, you have a great garden with ${qty} ${flowers} and ${(budget - sum).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(sum - budget).toFixed(2)} leva more.`);
    }

}
newHouse("Roses", 55, 250);
newHouse("Tulips", 88, 260);