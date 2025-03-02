function tradeCommissions(town, volume) {

    let commission = 0;

    if (volume < 0) {
        console.log("error");
        return;
    }

    switch (town) {

        case "Sofia":
            if (0 <= volume && volume <= 500) {
                commission += volume * 0.05;
            } else if (500 <= volume && volume <= 1000) {
                commission += volume * 0.07;
            } else if (1000 <= volume && volume <= 10000) {
                commission += volume * 0.08;
            } else if (volume > 10000) {
                commission += volume * 0.12;
            }
            console.log(commission.toFixed(2));
            break;
        case "Varna":
            if (0 <= volume && volume <= 500) {
                commission += volume * 0.045;
            } else if (500 <= volume && volume <= 1000) {
                commission += volume * 0.075;
            } else if (1000 <= volume && volume <= 10000) {
                commission += volume * 0.10;
            } else if (volume > 10000) {
                commission += volume * 0.13;
            }
            console.log(commission.toFixed(2));
            break;
        case "Plovdiv":
            if (0 <= volume && volume <= 500) {
                commission += volume * 0.055;
            } else if (500 <= volume && volume <= 1000) {
                commission += volume * 0.08;
            } else if (1000 <= volume && volume <= 10000) {
                commission += volume * 0.12;
            } else if (volume > 10000) {
                commission += volume * 0.145;
            }
            console.log(commission.toFixed(2));
            break;

        default:
            console.log("error");
            break;
    }
}
//tradeCommissions("Sofia", 1500);
tradeCommissions("Plovdiv", 8543.86);
//tradeCommissions("Varna", 1000)