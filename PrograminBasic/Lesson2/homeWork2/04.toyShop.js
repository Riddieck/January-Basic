function toyShop(priceForTrip, puzzles, dolls, bears, minions, trucks) {

    // 1. Toys Prices
    let puzzlesPrice = 2.60;
    let dollsPrice = 3;
    let bearsPrice = 4.10;
    let minionsPrice = 8.20;
    let trucksPrice = 2;

    // 2. Calc finalSum.
    let totalPrice =
        puzzles * puzzlesPrice +
        dolls * dollsPrice +
        bears * bearsPrice +
        minions * minionsPrice +
        trucks * trucksPrice;

    let finalSum = 0;

    // 3. Counting peaces, if they are 50 or more, making discount.
    let counter = puzzles + dolls + bears + minions + trucks;
    if (counter >= 50) {
        discount = totalPrice * 0.25;
        finalSum = totalPrice - discount;
    } else {
        finalSum = totalPrice;
    }
    // 5. Find rent for the shop.
    let rent = finalSum * 0.10;

    // 6. Calc Profit.
    let profit = finalSum - rent;

    // 7. Checking if profit is enough, and Print result.
    if (profit >= priceForTrip) {
        console.log(`Yes! ${(profit - priceForTrip).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(priceForTrip - profit).toFixed(2)} lv needed.`);
    }

}
toyShop(40.8, 20, 25, 30, 50, 10);
toyShop(320, 8, 2, 5, 5, 1);