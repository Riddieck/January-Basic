function solve(params) {

    let word = "";

    for (let i = params.length - 1; i >= 0; i--) {
        word += params[i];
    }

    console.log(word);

}
solve("Information");
solve("star");
solve("racecar");