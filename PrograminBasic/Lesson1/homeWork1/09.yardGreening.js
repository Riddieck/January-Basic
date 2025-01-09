function yardGreening(squares) {

    let oneSquareMeter = 7.61;
    let sum = squares * oneSquareMeter;
    let discount = sum * 0.18;
    let totalSum = sum - discount;

    console.log(`The final price is: ${totalSum} lv.`);
    console.log(`The discount is: ${discount} lv.`);

}
yardGreening(550);
yardGreening(150);