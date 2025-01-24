function fruitShop(fruit, day, qty) {

    let sum = 0;

    switch (day) {

        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":

            if (fruit === "banana") {
                sum += qty * 2.50;
            } else if (fruit === "apple") {
                sum += qty * 1.20;
            } else if (fruit === "orange") {
                sum += qty * 0.85;
            } else if (fruit === "grapefruit") {
                sum += qty * 1.45;
            } else if (fruit === "kiwi") {
                sum += qty * 2.70;
            } else if (fruit === "pineapple") {
                sum += qty * 5.50;
            } else if (fruit === "grapes") {
                sum += qty * 3.85;
            }

            if (sum == 0) {
                console.log("error");
                break;
            } else {
                console.log(`${sum.toFixed(2)}`);
                break;
            }

        case "Saturday":
        case "Sunday":

            if (fruit === "banana") {
                sum += qty * 2.70;
            } else if (fruit === "apple") {
                sum += qty * 1.25;
            } else if (fruit === "orange") {
                sum += qty * 0.90;
            } else if (fruit === "grapefruit") {
                sum += qty * 1.60;
            } else if (fruit === "kiwi") {
                sum += qty * 3.00;
            } else if (fruit === "pineapple") {
                sum += qty * 5.60;
            } else if (fruit === "grapes") {
                sum += qty * 4.20;
            }

            if (sum == 0) {
                console.log("error");
                break;
            } else {
                console.log(`${sum.toFixed(2)}`);
                break;
            }

        default:

            console.log("error");
            break;
    }
}
fruitShop("tomato", "Monday", 0.5);
//fruitShop("beer", "Friday", 3);