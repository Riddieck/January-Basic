function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let totalExpenses = 0;
    let shieldBreaks = 0;

    for (let fight = 1; fight <= lostFights; fight++) {
        let helmetBroken = fight % 2 === 0;
        let swordBroken = fight % 3 === 0;
        let shieldBroken = helmetBroken && swordBroken;

        if (helmetBroken) totalExpenses += helmetPrice;
        if (swordBroken) totalExpenses += swordPrice;
        if (shieldBroken) {
            totalExpenses += shieldPrice;
            shieldBreaks++;

            if (shieldBreaks % 2 === 0) {
                totalExpenses += armorPrice;
            }
        }
    }

    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);
}
gladiatorExpenses(7, 2, 3, 4, 5);