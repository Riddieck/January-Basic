function depositCalculation(depositSum, totalTimeInMonths, yearPercentage) {

    let interest = (depositSum * (yearPercentage / 100));
    let interestForMounth = (interest / 12);
    let totalSum = depositSum + (totalTimeInMonths * interestForMounth);

    console.log(totalSum);

}
depositCalculation(200, 3, 5.7);
depositCalculation(2350, 6, 7);