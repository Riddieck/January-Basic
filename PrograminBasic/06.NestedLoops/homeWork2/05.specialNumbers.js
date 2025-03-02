function specialNumbers(num) {

    let sum = "";
    for (let i = 1111; i <= 9999; i++) {

        let inside = "";
        let special = "" + i;

        for (let j = 0; j < special.length; j++) {

            let currentNum = Number(special[j]);

            if (num % currentNum === 0) {
                inside += currentNum;
            } else {
                break;
            }

        }
        if (inside !== special) {
            continue;
        } else {
            sum += special + " ";
        }

    }
    console.log(sum);

}