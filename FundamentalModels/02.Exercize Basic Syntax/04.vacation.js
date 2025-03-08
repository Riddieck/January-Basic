function vacation(group, type, day) {

    let totalPrice = 0;
    let currenPrice = 0;
    let discount = 0;

    switch (type) {

        case "Students":
            if (day === "Friday") {
                currenPrice = 8.45;
            } else if (day === "Saturday") {
                currenPrice = 9.80;
            } else if (day === "Sunday") {
                currenPrice = 10.46;
            }
            break;

        case "Business":
            if (day === "Friday") {
                currenPrice = 10.90;
            } else if (day === "Saturday") {
                currenPrice = 15.60;
            } else if (day === "Sunday") {
                currenPrice = 16;
            }
            break;

        case "Regular":
            if (day === "Friday") {
                currenPrice = 15;
            } else if (day === "Saturday") {
                currenPrice = 20;
            } else if (day === "Sunday") {
                currenPrice = 22.50;
            }
            break;
    }

    if (type === "Business" && group >= 100) {
        group -= 10;
    }

    totalPrice = group * currenPrice;

    if (type === "Students" && group >= 30) {
        discount = 0.15;
        totalPrice = totalPrice - (totalPrice * discount);
    } else if (type === "Regular" && group >= 10 && group <= 20) {
        discount = 0.05;
        totalPrice = totalPrice - (totalPrice * discount);
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);

}
vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");