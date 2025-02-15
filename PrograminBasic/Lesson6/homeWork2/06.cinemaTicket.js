function cinema(input) {

    let kidsTickets = 0;
    let studentTickets = 0;
    let standardTickets = 0;
    let totalTickets = 0;

    let index = 0;
    let command = input[index];

    while (command !== "Finish") {

        let nameOfMovie = command;
        index++;
        let freeSeats = Number(input[index]);
        index++;
        let currentTickets = 0;

        let command1 = input[index];

        while (command1 !== "End") {

            if (command1 === "kid") {
                kidsTickets++;
                currentTickets++;
            } else if (command1 === "student") {
                studentTickets++;
                currentTickets++;
            } else if (command1 === "standard") {
                standardTickets++;
                currentTickets++;
            }

            if (currentTickets >= freeSeats) {
                break;
            }

            index++;
            command1 = input[index];

        }

        totalTickets += currentTickets;
        console.log(`${nameOfMovie} - ${((currentTickets / freeSeats) * 100).toFixed(2)}% full.`);

        index++;
        command = input[index];

    }

    let kidsPercent = kidsTickets / totalTickets * 100;
    let studentPercent = studentTickets / totalTickets * 100;
    let standardPercent = standardTickets / totalTickets * 100;

    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${studentPercent.toFixed(2)}% student tickets.`);
    console.log(`${standardPercent.toFixed(2)}% standard tickets.`);
    console.log(`${kidsPercent.toFixed(2)}% kids tickets.`);

}