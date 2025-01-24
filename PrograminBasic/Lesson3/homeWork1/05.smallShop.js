function smallShop(product, town, qty) {

    let cash = 0;

    switch (product) {

        case "coffee":

            if (town === "Sofia") {
                cash = qty * 0.50;
            } else if (town === "Plovdiv") {
                cash = qty * 0.40;
            } else if (town === "Varna") {
                cash = qty * 0.45;
            }

            break;

        case "water":

            if (town === "Sofia") {
                cash = qty * 0.80;
            } else if (town === "Plovdiv") {
                cash = qty * 0.70;
            } else if (town === "Varna") {
                cash = qty * 0.70;
            }

            break;

        case "beer":

            if (town === "Sofia") {
                cash = qty * 1.20;
            } else if (town === "Plovdiv") {
                cash = qty * 1.15;
            } else if (town === "Varna") {
                cash = qty * 1.10;
            }

            break;

        case "sweets":
            if (town === "Sofia") {
                cash = qty * 1.45;
            } else if (town === "Plovdiv") {
                cash = qty * 1.30;
            } else if (town === "Varna") {
                cash = qty * 1.35;
            }

            break;

        case "peanuts":

            if (town === "Sofia") {
                cash = qty * 1.60;
            } else if (town === "Plovdiv") {
                cash = qty * 1.50;
            } else if (town === "Varna") {
                cash = qty * 1.55;
            }

            break;

    }

    console.log(cash);

}
smallShop("coffee", "Varna", 2);