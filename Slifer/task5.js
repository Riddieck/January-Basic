function task5(input) {

    let seaTrips = Number(input[0]);
    let mountainTrips = Number(input[1]);
    let seaPrice = 680;
    let mountainPrice = 499;
    let profit = 0;
    let index = 2;
    
    while (index < input.length) {
        let command = input[index];

        if (command === "sea" && seaTrips > 0) {
            profit += seaPrice;
            seaTrips--;

        } else if (command === "mountain" && mountainTrips > 0) {
            profit += mountainPrice;
            mountainTrips--;
        }
        
        if (seaTrips === 0 && mountainTrips === 0) {
            console.log("Good job! Everything is sold.");
            console.log(`Profit: ${profit} leva.`);
            return;
        }
        index++;
    }
    console.log(`Profit: ${profit} leva.`);
}
task5([
    "6",
    "3",
    "sea",
    "mountain",
    "mountain",
    "mountain",
    "sea",
    "Stop"
]);