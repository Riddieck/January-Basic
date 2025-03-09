// function specialNumber(n) {

//     for (let i = 1; i <= n; i++) {

//         if (i / 5 == 1) {
//             console.log(`${i} -> True`);
//         } else if (i / 7 == 1) {
//             console.log(`${i} -> True`);
//         } else if (i / 11 == 1) {
//             console.log(`${i} -> True`);
//         } else {
//             console.log(`${i} -> False`);
//         }
//     }
// }
// specialNumber(15);

function specialNumber(n) {

    for (let num = 1; num <= n; num++) {
        let sum = 0;
        let temp = num;

        while (temp > 0) {
            sum += temp % 10; // Add the last digit to sum
            temp = Math.floor(temp / 10); // Remove the last digit
        }

        let isSpecial = (sum === 5 || sum === 7 || sum === 11);

        if (isSpecial) {
            console.log(`${num} -> True`);
        } else {
            console.log(`${num} -> False`);
        }
    }
}
specialNumber(15);