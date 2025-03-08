function thePiramid(base, increment) {

    let height = 0;
    let counter = 0;

    let stoneCounter = 0;
    let marbleCounter = 0;
    let lapisCounter = 0;
    let goldCounter = 0;

    for (let i = base; i >= 1; i -= 2) {

        counter++;
        height += increment;
        if (i <= 2) {
            goldCounter = (i * i) * increment;
            break;
        }

        if (counter % 5 == 0 || counter % 10 == 0) {
            let totalAtFloor = i * i;
            stone = (i - 2) * (i - 2);
            stoneCounter += stone * increment;
            lapis = totalAtFloor - stone;
            lapisCounter += lapis * increment;
            continue;
        }

        let totalAtFloor = i * i;

        stone = (i - 2) * (i - 2);
        stoneCounter += stone * increment;
        marble = totalAtFloor - stone;
        marbleCounter += marble * increment;

    }

    console.log(`Stone required: ${Math.ceil(stoneCounter)}`);
    console.log(`Marble required: ${Math.ceil(marbleCounter)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisCounter)}`);
    console.log(`Gold required: ${Math.ceil(goldCounter)}`);
    console.log(`Final pyramid height: ${Math.floor(height)}`);

}
thePiramid(11, 1);
thePiramid(11, 0.75);
thePiramid(12, 1);
thePiramid(23, 0.5);