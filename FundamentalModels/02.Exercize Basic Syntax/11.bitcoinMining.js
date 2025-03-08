function bitcoinMining(params) {

    let money = 0;
    let gram = 67.51;
    let bitcoin = 11949.16;
    let totalDays = Number(params.length);


    let bitcoinCounter = 0;
    let dayCounter = 0;
    let firstCoin = 0;


    let index = 0;
    let minedGold = Number(params[index]);


    for (let i = 1; i <= totalDays; i++) {

        dayCounter++;

        if (i % 3 == 0) {
            minedGold = minedGold * 0.70;
        }
        money += minedGold * gram;

        while (money > bitcoin) {
            money -= bitcoin;
            bitcoinCounter++;
            if (bitcoinCounter == 1) {
                firstCoin = dayCounter;
            }
        }

        index++;
        minedGold = params[index];
    }

    if (bitcoinCounter >= 1) {

        console.log(`Bought bitcoins: ${bitcoinCounter}`);
        console.log(`Day of the first purchased bitcoin: ${firstCoin}`);
        console.log(`Left money: ${money.toFixed(2)} lv.`);
    } else {
        console.log(`Bought bitcoins: ${bitcoinCounter}`);
        console.log(`Left money: ${money.toFixed(2)} lv.`);

    }

}
bitcoinMining([100, 200, 300]);
bitcoinMining([50, 100]);
bitcoinMining([3124.15, 504.212, 2511.124]);