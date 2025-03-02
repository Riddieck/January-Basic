function skiTrip(totalDays, room, status) {

    let discout = 0;
    let nigths = totalDays - 1;
    let sum = 0;

    switch (room) {
        case "room for one person":
            sum = nigths * 18;

            if (status === "positive") {
                discout = 0.25
                sum = sum + (sum * discout);
            } else if (status === "negative") {
                discout = 0.10
                sum = sum - (sum * discout);
            }

            break;
        case "apartment":
            sum = nigths * 25;

            if (totalDays < 10) {
                discout = sum * 0.30;
                sum = sum - discout;
            } else if (totalDays > 10 && totalDays < 15) {
                discout = sum * 0.35;
                sum = sum - discout;
            } else if (totalDays > 15) {
                discout = sum * 0.50;
                sum = sum - discout;
            }

            if (status === "positive") {
                discout = 0.25
                sum = sum + (sum * discout);
            } else if (status === "negative") {
                discout = 0.10
                sum = sum - (sum * discout);
            }


            break;
        case "president apartment":
            sum = nigths * 35;

            if (totalDays < 10) {
                discout = sum * 0.10;
                sum = sum - discout;
            } else if (totalDays > 10 && totalDays < 15) {
                discout = sum * 0.15;
                sum = sum - discout;
            } else if (totalDays > 15) {
                discout = sum * 0.20;
                sum = sum - discout;
            }

            if (status === "positive") {
                discout = 0.25
                sum = sum + (sum * discout);
            } else if (status === "negative") {
                discout = 0.10
                sum = sum - (sum * discout);
            }
            break;
    }
    console.log(sum.toFixed(2));
}
//skiTrip(14, "apartment", "positive");
skiTrip(30, "president apartment", "negative");
//skiTrip(12, "room for one person", "positive");
