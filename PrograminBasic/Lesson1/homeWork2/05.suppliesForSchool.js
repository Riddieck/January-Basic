function suppliesForSchool(pens, markers, litres, discount) {

    let penPacket = 5.80;
    let markerPacket = 7.20;
    let moneyPerLitres = 1.20;

    penPrice = pens * penPacket;
    markerPrice = markers * markerPacket;
    cleaningAgent = moneyPerLitres * litres;

    sum = penPrice + markerPrice + cleaningAgent;
    totalSum = sum - (sum * (discount / 100));

    console.log(totalSum);

}
suppliesForSchool(2, 3, 4, 25);
suppliesForSchool(4, 2, 5, 13);