function vacationBookList(pagesNumber, pagesForHour, days) {

    let totalTimeForReading = pagesNumber / pagesForHour;
    let neededHours = totalTimeForReading / days;
    console.log(neededHours);

}
vacationBookList(212, 20, 2);
vacationBookList(432, 15, 4);