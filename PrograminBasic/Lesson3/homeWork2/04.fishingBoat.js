function finishingBoat(budget, season, people) {

    let priceForShip = 0;
    let discount = 0;

    switch (season) {
        case "Spring":
            priceForShip += 3000;
            
            if (people <= 6) {
                priceForShip *= 0.90;
            } else if (people >= 7 && people <= 11) {
                priceForShip *= 0.85;
            } else if (people > 12) {
                priceForShip *= 0.75;
            }
            if (people % 2 === 0) {
                discount = 0.05;
                priceForShip -= discount;
            }
            
            break;
        case "Summer":
        case "Autumn":
            priceForShip += 4200;
            if (people <= 6) {
                priceForShip *= 0.90;
            } else if (people >= 7 && people <= 11) {
                priceForShip *= 0.85;
            } else if (people > 12) {
                priceForShip *= 0.75;
            }
            if (season === "Autumn") {
                break;
            } else if (people % 2 === 0){
                discount = 0.05;
                priceForShip -= discount;
            }
            
            break;
        case "Winter":
            priceForShip += 2600;
            
            if (people <= 6) {
                priceForShip *= 0.90;
            } else if (people >= 7 && people <= 11) {
                priceForShip *= 0.85;
            } else if (people > 12) {
                priceForShip *= 0.75;
            }
            if (people % 2 === 0) {
                discount = 0.05;
                priceForShip -= discount;
            }
            
            break;
    }
    
    if (budget >= priceForShip) {
        console.log(`Yes! You have ${(budget - priceForShip).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(priceForShip - budget).toFixed(2)} leva.`);
    }

}
finishingBoat(3000, "Summer", 11);
finishingBoat(3600, "Autumn", 6);
finishingBoat(2000, "Winter", 13);