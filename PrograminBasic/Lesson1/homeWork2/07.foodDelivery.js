function foodDelivery(qtyChickenMenu, qtyFishMenu, qtyVeganMenu) {

    let chickenMeat = 10.35;
    let fishMenu = 12.40;
    let veganMenu = 8.15;

    priceForChickenMenu = chickenMeat * qtyChickenMenu;
    priceForFishMenu = fishMenu * qtyFishMenu;
    priceForVeganMenu = veganMenu * qtyVeganMenu;

    totalPrice = priceForChickenMenu + priceForFishMenu + priceForVeganMenu;
    discount = totalPrice * 0.20;

    sum = totalPrice + discount + 2.50;
    console.log(sum);

}
foodDelivery(2, 4, 3);
foodDelivery(9, 2, 6);