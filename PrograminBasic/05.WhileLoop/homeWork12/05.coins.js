function coins(number) {

    // Монети в стотинки
    let coins = [200, 100, 50, 20, 10, 5, 2, 1];

    // Преобразуваме лева в стотинки
    number = Math.round(number * 100);

    let coinCount = 0;
    let i = 0;

    while (number > 0 && i < coins.length) {

        if (number >= coins[i]) {

            // Броя на монетите от даден вид
            coinCount += Math.floor(number / coins[i]);

            // Оставащото ресто
            number = number % coins[i];
        }

        i++;

    }

    console.log(coinCount);

}
coins(1.23);