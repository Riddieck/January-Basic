function amazing(num) {

    let amz = String(num);
    let result = 0;

    for (let i = 0; i < amz.length; i++) {

        curNum = Number(amz[i]);
        result += curNum;
    }

    isTrue = false;
    result = String(result);

    for (let j = 0; j < result.length; j++) {

        if (result[j] == 9) {
            isTrue = true
        }
    }

    console.log(`${num} Amazing? ${isTrue ? "True" : "False"}`);

}
amazing(1233);
amazing(999);

function amazing(num) {

    let numAsString = String(num);
    let sum = 0;

    for (let i = 0; i < numAsString.length; i++) {

        sum += Number(numAsString[i]);

    }

    let sumAsSting = String(sum);
    let isAmazing = "False";

    for (let j = 0; j < sumAsSting.length; j++) {

        if (sumAsSting[j] == "9") {
            isAmazing = "True";
        }
    }

    console.log(`${num} Amazing? ${isAmazing}`);

}
amazing(1233);
amazing(999);