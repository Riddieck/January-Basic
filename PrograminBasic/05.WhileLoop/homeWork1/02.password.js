function passWord(params) {

    let name = params[0];
    let pass = params[1];
    let data = params[2];

    let i = 3;
    while (data !== pass) {
        data = params[i];
        i++;
    }

    console.log(`Welcome ${name}!`);

}
passWord(["Nakov",
    "1234",
    "Pass",
    "1324",
    "1234",
])