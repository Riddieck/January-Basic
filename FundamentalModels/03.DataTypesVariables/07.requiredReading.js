function requiredReadings(pages, pagesForHour, days) {

    let totalTime = pages / pagesForHour;
    let requiredTime = totalTime / days;

    console.log(`${requiredTime}`);

}
requiredReadings(212, 20, 2);