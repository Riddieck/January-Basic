function trekkingMania(input) {

    let numberOfClimers = input[0];
    let musala = 0;
    let monblan = 0;
    let kili = 0;
    let k2 = 0;
    let everest = 0;
    let totalNumer = 0;

    for (let i = 1; i <= input.length - 1; i++) {

        let currentGroup = Number(input[i]);
        totalNumer += currentGroup;

        if (currentGroup <= 5) {
            musala += currentGroup;
        } else if (currentGroup > 5 && currentGroup <= 12) {
            monblan += currentGroup;
        } else if (currentGroup > 12 && currentGroup <= 25) {
            kili += currentGroup;
        } else if (currentGroup > 25 && currentGroup <= 40) {
            k2 += currentGroup;
        } else if (currentGroup > 40) {
            everest += currentGroup;
        }

    }

    group1 = (musala / totalNumer) * 100;
    group2 = (monblan / totalNumer) * 100;
    group3 = (kili / totalNumer) * 100;
    group4 = (k2 / totalNumer) * 100;
    group5 = (everest / totalNumer) * 100;

    console.log(`${group1.toFixed(2)}%`);
    console.log(`${group2.toFixed(2)}%`);
    console.log(`${group3.toFixed(2)}%`);
    console.log(`${group4.toFixed(2)}%`);
    console.log(`${group5.toFixed(2)}%`);

}
trekkingMania(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"]);