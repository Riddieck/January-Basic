function numberPyramid(number) {

    let currentNum = 1;
    let isBigger = false;
    let printCurrentLine = "";

    for (let rows = 1; rows <= number; rows++) {

        for (let cols = 1; cols <= rows; cols++) {

            if (currentNum > number) {
                isBigger = true;
                break;
            }
            printCurrentLine += currentNum + " ";
            currentNum++;

        }

        console.log(printCurrentLine);
        printCurrentLine = "";
        if (isBigger) {
            break;
        }

    }
}