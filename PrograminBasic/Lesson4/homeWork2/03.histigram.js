function numbersEnding(numbers) {

    let needed = numbers[0];

    let p1Counter = 0;
    let p2Counter = 0;
    let p3Counter = 0;
    let p4Counter = 0;
    let p5Counter = 0;

    for (let i = 1; i <= numbers.length - 1; i++) {

        let currentNum = numbers[i];

        if (currentNum < 200) {
            p1Counter++;
        } else if (currentNum >= 200 && currentNum < 400) {
            p2Counter++;
        } else if (currentNum > 399 && currentNum < 600) {
            p3Counter++;
        } else if (currentNum > 599 && currentNum < 800) {
            p4Counter++;
        } else if (currentNum >= 800) {
            p5Counter++;
        }

    }

    totalP1 = (p1Counter / needed) * 100;
    totalP2 = (p2Counter / needed) * 100;
    totalP3 = (p3Counter / needed) * 100;
    totalP4 = (p4Counter / needed) * 100;
    totalP5 = (p5Counter / needed) * 100;

    console.log(`${totalP1.toFixed(2)}%`);
    console.log(`${totalP2.toFixed(2)}%`);
    console.log(`${totalP3.toFixed(2)}%`);
    console.log(`${totalP4.toFixed(2)}%`);
    console.log(`${totalP5.toFixed(2)}%`);

}
numbersEnding([3, 1, 2, 999]);