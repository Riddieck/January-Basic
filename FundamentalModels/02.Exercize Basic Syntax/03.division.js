function division(num) {

    if (num % 10 == 0) {
        console.log("The number is divisible by 10");
        return;
    } else if (num % 7 == 0) {
        console.log("The number is divisible by 7");
        return;
    } else if (num % 6 == 0) {
        console.log("The number is divisible by 6");
        return;
    } else if (num % 3 == 0) {
        console.log("The number is divisible by 3");
        return;
    } else if (num % 2 == 0) {
        console.log("The number is divisible by 2");
        return;
    } else {
        console.log("Not divisible");
    }
}
division(30);
division(15);
division(12);
division(1643);