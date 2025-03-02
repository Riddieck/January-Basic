function cake(arr) {

    let l = Number(arr[0]);
    let w = Number(arr[1]);

    let total = l * w;
    let sum = 0;

    let i = 2; // i = 2 -> Следователно arr[i] = ([" ", " ", "2", " ", " "]) 3-ти <- елемент от масива.

    while (arr[i] !== "STOP" && i < arr.length) {

        if (arr[i] === "STOP") {
            console.log(`${total - sum} pieces are left.`);
            return;
        }

        sum += Number(arr[i]);

        if (sum > total) {
            console.log(`No more cake left! You need ${sum - total} pieces more.`);
            return;
        }
        i++;

    }

    console.log(`${total - sum} pieces are left.`);

}
cake(["10", "10", "20", "20", "20", "20", "21"]);