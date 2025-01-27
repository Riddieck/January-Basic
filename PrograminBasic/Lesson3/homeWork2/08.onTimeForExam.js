function examTime(examHour, examMinute, arrivalHour, arrivalMinute) {

    // Преобразуваме времето в минути за по-лесно изчисление на разликата
    let examTotalMinutes = examHour * 60 + examMinute;
    let arrivalTotalMinutes = arrivalHour * 60 + arrivalMinute;

    let difference = Math.abs(arrivalTotalMinutes - examTotalMinutes);

    if (difference == 0) {
        console.log("On time");
    }

    hours = Math.floor(difference / 60);
    minutes = difference % 60;

    if (arrivalTotalMinutes < examTotalMinutes) {
        if (minutes <= 30 && hours < 1) {
            console.log("On time");
        } else {
            console.log("Early");
        }

        if (hours == 0) {
            console.log(`${minutes} minutes before the start`);
        } else {
            if (minutes < 10) {
                console.log(`${hours}:0${minutes} hours before the start`);
            } else {
                console.log(`${hours}:${minutes} hours before the start`);
            }
        }

    } else if (arrivalTotalMinutes > examTotalMinutes) {
        console.log("Late");
        if (hours < 1) {
            console.log(`${minutes} minutes after the start`);
        } else {
            if (minutes < 10) {
                console.log(`${hours}:0${minutes} hours after the start`);
            } else {
                console.log(`${hours}:${minutes} hours after the start`);
            }
        }
    }
}
examTime(9, 30, 9, 50);
examTime(9, 00, 8, 30);
examTime(16, 00, 15, 00);
examTime(9, 00, 10, 30);
examTime(14, 00, 13, 55);
examTime(11, 30, 8, 12);