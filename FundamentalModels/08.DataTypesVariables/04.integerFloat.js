// function integerFloat(num1, num2, num3) {

//     let sum = num1 + num2 + num3;

//     sum % 1 === 0 ? sum += " - Integer" : sum += " - Float";
//     //      (Условие) ? (Стойност_ако_истина) : (Стойност_ако_лъжа);

//     console.log(sum);

// }
// integerFloat(9, 100, 1.1);
// integerFloat(100, 200, 300);

function solve(a, b, c) {

    let sum = a + b + c;
    let sumAsSting = String(sum);

    let isFloat = false;

    for (let i = 0; i < sumAsSting.length; i++) {

        if (sumAsSting[i] == ".") {
            isFloat = true;
        }
    }

    console.log(`${sum} - ${isFloat ? "Float" : "Integer"}`);
    //                    (Условие) ? (ако_вярно) : (ако_грешно);

}
solve(9, 100, 1.1);
solve(100, 200, 300);