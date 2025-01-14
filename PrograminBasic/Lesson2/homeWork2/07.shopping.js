function shopping(budget, videoCards, cpus, rams) {

    let sumVideoCard = videoCards * 250;
    let sumCpus = cpus * (sumVideoCard * 0.35);
    let sumRam = rams * (sumVideoCard * 0.10);

    let totalSum =
        sumVideoCard +
        sumCpus +
        sumRam;

    if (videoCards > cpus) {
        totalSum = totalSum - (totalSum * 0.15);
    }

    if (budget >= totalSum) {
        console.log(`You have ${(budget - totalSum).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(totalSum - budget).toFixed(2)} leva more!`);
    }
}
shopping(900, 2, 1, 3);
shopping(920.45, 3, 1, 1);