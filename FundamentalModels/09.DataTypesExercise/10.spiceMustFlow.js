function spiceExtraction(startingYield) {
    let totalSpice = 0;
    let daysOperated = 0;

    while (startingYield >= 100) {
        daysOperated++;
        totalSpice += startingYield;
        startingYield -= 10; // Reduce yield each day

        // Crew consumes 26 spice at the end of each day
        totalSpice -= 26;
    }

    // After mining is abandoned, crew consumes 26 spice if there is any spice left
    if (totalSpice >= 26) {
        totalSpice -= 26;
    }

    console.log(daysOperated);
    console.log(totalSpice);
}
spiceExtraction(111);