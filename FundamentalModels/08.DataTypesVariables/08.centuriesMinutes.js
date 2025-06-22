function minutes(params) {

    let years = params * 100;
    let days = Math.trunc(years * 365.2422);
    let hours = days * 24;
    let minutes = hours * 60;

    console.log(`${params} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);

}
minutes(1);
minutes(5);