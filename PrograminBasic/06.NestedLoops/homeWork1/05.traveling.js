function traviling(data) {

    let i = 0;

    while (i < data.length) {
        let destination = data[i];
        if (destination === "End") {
            break;
        }

        i++;
        let minBudget = parseFloat(data[i]);
        let savedMoney = 0;

        i++;

        while (i < data.lenth && data[i] !== "End" && isNaN(data[i]) === false) {
            savedMoney += parseFloat(data[i]);
            if (savedMoney >= minBudget) {
                console.log(`Going to ${destination}!`);
                break;
            }
            i++;
        }
        i++;
    }

}
traviling(["Greece",
    "1000",
    "200",
    "200",
    "300",
    "100",
    "150",
    "240",
    "Spain",
    "1200",
    "300",
    "500",
    "193",
    "423",
    "End"
])