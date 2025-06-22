function rightPlace(word, symbol, matched) {

    let result = "";

    for (let i = 0; i < word.length; i++) {

        if (word[i] == "_") {
            result += symbol;
        } else {
            result += word[i];
        }

    }

    if (result == matched) {
        console.log("Matched");
    } else {
        console.log("Not Matched");
    }

}
rightPlace("Str_ng", "o", "Strong");

function solve(str, symbol, result) {
    
    let res = str.replace("_", symbol); // Имай в предвид че с .replace (заменяме само 1-вия ел. които намерим)
// Заменяме 1-ви ел. ("_", symbol) с 2-рия ел. (symbol); 

    let output = res === result ? "Matched" : "Not Matched";
//   (output)  =    (Условие)   ? (output = "Matched") : (output = "Not Matched");

    console.log(output);

}