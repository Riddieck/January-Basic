function task1(strawberryPrice, bananas, oranges, malins, strawberryQty) {

    malinsPrice = strawberryPrice / 2;
    orangesPrice = malinsPrice * 0.60;
    bananasPrice = malinsPrice * 0.20;

    moneyMalins = malins * malinsPrice;
    moneyOranges = oranges * orangesPrice;
    moneyBananas = bananas * bananasPrice;
    moneyStraws = strawberryQty * strawberryPrice;

    totalSum = moneyMalins + moneyOranges + moneyBananas + moneyStraws;
    console.log(totalSum.toFixed(2));

}
task1(48, 10, 3.3, 6.5, 1.7);