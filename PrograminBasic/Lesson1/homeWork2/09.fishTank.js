function fishTank(length, width, height, percent) {

    let capacity = length * width * height;
    let volumeInLitres = capacity / 1000;

    totalLitres = volumeInLitres * (1 - (percent / 100));
    console.log(totalLitres);

}
fishTank(85, 75, 47, 17);
fishTank(105, 77, 89, 18.5);