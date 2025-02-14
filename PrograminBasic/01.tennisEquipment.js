function demo(rocket, count, countShoes) {

    let priceForRockets = rocket * count;
    let priceForShoe = rocket / 6;
    let priceForShoes = countShoes * priceForShoe;

    let otherEquipment = (priceForRockets + priceForShoes) * 0.20;

    totalSum = ((priceForRockets + priceForShoes) + otherEquipment);
    sumForPlayer = Math.floor((totalSum / 8));
    restSum = Math.ceil(totalSum * (7 / 8));

    console.log(`Price to be paid by Djokovic ${sumForPlayer}`);
    console.log(`Price to be paid by sponsors ${restSum}`);

}
demo(850, 4, 2)