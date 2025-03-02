function godzillaVsKong(budget, people, clothesForOne) {

    let decor = budget * 0.10;
    let priceForClothes = people * clothesForOne;

    if (people > 150) {
        priceForClothes = priceForClothes - (priceForClothes * 0.10);
    }
    let totalPrice = decor + priceForClothes

    if (budget >= totalPrice) {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${(budget - totalPrice).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${(totalPrice - budget).toFixed(2)} leva more.`);
    }
}
godzillaVsKong(20000, 120, 55.5);
godzillaVsKong(15437.62, 186, 57.99);
godzillaVsKong(9587.88, 222, 55.68);