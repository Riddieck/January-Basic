function dayofWeek(params) {

    let days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ];

    if (params >= 0 && params <= 7) {
        console.log(days[params - 1]);
    } else {
        console.log("Invalid day!");
    }

}
dayofWeek(11);