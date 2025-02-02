function readText(params) {

    let i = 0;

    while (i < params.length) {

        if (params[i] === "Stop") {
            break;
        }

        console.log(params[i]);
        i++;
    }

}
readText(["Nakov",
    "SoftUni",
    "Sofia",
    "Bulgaria",
    "SomeText",
    "Stop",
    "AfterStop",
    "Europe",
    "HelloWorld",
]);