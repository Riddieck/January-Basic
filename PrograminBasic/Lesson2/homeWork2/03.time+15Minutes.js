function time15Minutes(hours, minutes) {

    // 1. Convert everything to minutes
    let totalMinutes = hours * 60 + minutes;

    // 2. Add 15 minutes
    let addedMinutes = totalMinutes + 15;

    // 3. Convert from minutes to hours

    // 3.1 Find hours by dividing by 60 and getting the whole part only
    // Math.trunc() | Math.floor()
    let newHour = Math.floor(addedMinutes / 60);

    // 3.2 Find remaining minutes by getting the remainder of the division by 60;
    let newMinutes = addedMinutes % 60;

    // 4. If hour gets to 24, reset to 0
    if (newHour === 24) {
        newHour = 0;
    }

    // 5. Print result
    if (newMinutes < 10) {
        console.log(`${newHour}:0${newMinutes}`);
    } else {
        console.log(`${newHour}:${newMinutes}`);
    }

}
time15Minutes(1, 46);
//time15Minutes(0, 01);
//time15Minutes(23, 59);
//time15Minutes(11, 08);