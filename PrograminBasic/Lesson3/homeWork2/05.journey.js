function journey(budget, season) {

    let spendMoney = 0;
    let destination = "";
    let type = "";

    if (budget <= 100) {
        destination = "Bulgaria";
        if (season === "summer") {
            spendMoney = budget * 0.30;
            type = "Camp";
        } else if (season === "winter") {
            spendMoney = budget * 0.70;
            type = "Hotel";
        }
    } else if (budget <= 1000) {
        destination = "Balkans";
        if (season === "summer") {
            spendMoney = budget * 0.40;
            type = "Camp";
        } else if (season === "winter") {
            spendMoney = budget * 0.80;
            type = "Hotel";
        }
    } else if (budget > 1000) {
        destination = "Europe"
        spendMoney = budget * 0.90;
        type = "Hotel";
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${type} - ${(spendMoney).toFixed(2)}`);

}
journey(50, "summer");
journey(75, "winter");
journey(312, "summer");
journey(678.53, "winter");
journey(1500, "summer");