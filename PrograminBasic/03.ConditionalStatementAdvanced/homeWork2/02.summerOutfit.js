function summerOutFit(temp, time) {

    let outfit;
    let shoes;

    switch (time) {
        case "Morning":
            if (10 <= temp && temp <= 18) {
                outfit = "Sweatshirt";
                shoes = "Sneakers";
            } else if (18 <= temp && temp <= 24) {
                outfit = "Shirt";
                shoes = "Moccasins";
            } else if (temp >= 25) {
                outfit = "T-Shirt";
                shoes = "Sandals";
            }
            break;
        case "Afternoon":
            if (10 <= temp && temp <= 18) {
                outfit = "Shirt";
                shoes = "Moccasins";
            } else if (18 <= temp && temp <= 24) {
                outfit = "T-Shirt";
                shoes = "Sandals";
            } else if (temp >= 25) {
                outfit = "Swim Suit";
                shoes = "Barefoot";
            }
            break;
        case "Evening":
            if (10 <= temp && temp <= 18) {
                outfit = "Shirt";
                shoes = "Moccasins";
            } else if (18 <= temp && temp <= 24) {
                outfit = "Shirt";
                shoes = "Moccasins";
            } else if (temp >= 25) {
                outfit = "Shirt";
                shoes = "Moccasins";
            }

            break;
    }

    console.log(`It's ${temp} degrees, get your ${outfit} and ${shoes}.`);
}
summerOutFit(16, "Morning");