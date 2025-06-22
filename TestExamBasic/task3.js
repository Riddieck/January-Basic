function task3(peoples, season) {

    let sum = 0;
    let discount = 0;

    switch (season) {

        case "spring":
            if (peoples <= 5) {
                sum += peoples * 50.00;
            } else if (peoples > 5) {
                sum += peoples * 48.00;
            }
            break;

        case "summer":
            if (peoples <= 5) {
                sum += peoples * 48.50;
            } else if (peoples > 5) {
                sum += peoples * 45.00;
            }
            discount = sum * 0.15;
            sum = sum - discount;
            break;

        case "autumn":
            if (peoples <= 5) {
                sum += peoples * 60.00;
            } else if (peoples > 5) {
                sum += peoples * 49.50;
            }

            break;
        case "winter":
            if (peoples <= 5) {
                sum += peoples * 86.00;
            } else if (peoples > 5) {
                sum += peoples * 85.00;
            }
            discount = sum * 0.08;
            sum = sum + discount;
            break;

    }

    console.log(`${sum.toFixed(2)} leva.`);

}
task3(20, "winter");