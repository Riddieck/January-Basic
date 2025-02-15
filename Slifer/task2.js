function task2(moneyForDay, daySales, moneyForAllPeriod, priceGift) {

    let savedMoney = 5 * moneyForDay;
    let savedMoneyFromSales = 5 * daySales;
    let totalMoney = savedMoney + savedMoneyFromSales;

    let expenses = totalMoney - moneyForAllPeriod;

    if (expenses > priceGift) {
        console.log(`Profit: ${expenses.toFixed(2)} BGN, the gift has been purchased.`);
    } else {
        console.log(`Insufficient money: ${(priceGift - expenses).toFixed(2)} BGN.`);
    }
}
task2(2.10, 17.50, 20.20, 148.50);