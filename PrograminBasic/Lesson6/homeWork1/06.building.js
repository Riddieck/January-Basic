function building(floors, rooms) {

    let currentFloor = "";

    for (let f = floors; f >= 1; f--) {

        for (let r = 0; r < rooms; r++) {

            if (f === floors) {
                currentFloor += "L" + f + r + " ";
            }
            if (f % 2 === 0 && f !== floors) {
                currentFloor += "O" + f + r + " ";
            }
            if (f % 2 !== 0 && f !== floors) {
                currentFloor += "A" + f + r + " ";
            }
        }
        console.log(`${currentFloor}`);
        currentFloor = "";
    }
}