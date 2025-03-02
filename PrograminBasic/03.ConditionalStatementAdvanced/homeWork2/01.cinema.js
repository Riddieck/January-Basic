function cinema(type, rows, columns) {

    let income = 0;
    if (type == "Premiere") {
        income += rows * columns * 12.00;
    } else if (type == "Normal") {
        income += rows * columns * 7.50;
    } else if (type == "Discount") {
        income += rows * columns * 5.00;
    }

    console.log(`${income.toFixed(2)} leva`);

}
cinema("Premiere", 10, 12);
cinema("Normal", 21, 13);
cinema("Discount", 12, 30);