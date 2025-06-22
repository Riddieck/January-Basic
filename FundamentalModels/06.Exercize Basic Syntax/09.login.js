function loginTask(params) {

    let userName = params[0];
    let codedName = "";

    for (let j = userName.length - 1; j >= 0; j--) {

        codedName += userName[j];

    }

    let index = 1;
    let word = params[index];

    for (let i = 1; i < params.length; i++) {

        if (i > 3 && word !== codedName) {
            console.log(`User ${userName} blocked!`);
            return;
        }

        if (word !== codedName) {
            console.log("Incorrect password. Try again.");
        }

        if (word === codedName) {
            console.log(`User ${userName} logged in.`);
            return;
        }

        index++;
        word = params[index];

    }

}
loginTask(["Acer", "login", "go", "let me in", "recA"]);
loginTask(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);