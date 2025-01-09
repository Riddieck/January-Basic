function basketball(feeForYear) {

    let sneakers = feeForYear - (feeForYear * 0.40);
    let equipment = sneakers - (sneakers * 0.20);
    let ball = equipment * 0.25;
    let accessories = ball * 0.20;

    totalSum = feeForYear + sneakers + equipment + ball + accessories;

    console.log(totalSum);

}
basketball(365);
basketball(550);