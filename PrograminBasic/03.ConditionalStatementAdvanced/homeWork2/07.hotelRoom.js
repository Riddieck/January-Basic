function hotelRoom(month, nights) {

    let studio = 0;
    let apartment = 0;

    switch (month) {
        case "May":
        case "October":
            studio = 50;
            apartment = 65;
            if (nights > 7 && nights <= 14) {
                studio *= 0.95;
            } else if (nights > 14) {
                studio *= 0.70;
                apartment *= 0.90;
            }

            break;
        case "June":
        case "September":
            studio = 75.20;
            apartment = 68.70;
            if (nights > 14) {
                studio *= 0.80;
                apartment *= 0.90;
            }
            break;
        case "July":
        case "August":
            studio = 76;
            apartment = 77;
            if (nights > 14) {
                apartment *= 0.90;
            }
            break;
    }

    console.log(`Apartment: ${(nights * apartment).toFixed(2)} lv.`);
    console.log(`Studio: ${(nights * studio).toFixed(2)} lv.`);

}
hotelRoom("May", 15);