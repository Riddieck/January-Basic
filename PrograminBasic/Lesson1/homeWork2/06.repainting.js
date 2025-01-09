function supplies(qtyNylon, qtyPaint, thinner, hours) {

    let priceNylon = 1.50;
    let priceForLiterPaint = 14.50;
    let priceForThinner = 5.00;
    let bagPrice = 0.40;

    sumForNylon = (qtyNylon + 2) * priceNylon;
    sumForPaint = (qtyPaint + (qtyPaint * 0.10)) * priceForLiterPaint;
    sumForThinner = thinner * priceForThinner;

    totalSum = sumForNylon + sumForPaint + sumForThinner + bagPrice;
    priceForHours = (totalSum * 0.30) * hours;

    console.log(totalSum + priceForHours);

}
supplies(10, 11, 4, 8);
supplies(5, 10, 10, 1);