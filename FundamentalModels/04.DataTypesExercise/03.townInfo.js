function townInfo(name, population, area) {

    if (name.length < 3) {
        console.log("Town name must be at least 3 characters!");
    }

    if (population < 0) {
        console.log("Population must be a positive number!");
    }

    if (area < 0) {
        console.log("Area must be a positive number!");
    }

    if (name.length > 2 && population >= 0 && area >= 0) {
        console.log(`Town ${name} has population of ${population} and area ${area} square km.`);
    }

}

// function townInfo(townName, population, area) {
//     // Validate town name length
//     if (townName.length < 3) {
//         console.log("Town name must be at least 3 characters!");

//     }

//     // Validate population and area
//     if (population < 0) {
//         console.log("Population must be a positive number!");

//     }

//     if (area < 0) {
//         console.log("Area must be a positive number!");

//     }

//     if (townName.length > 2 && population >= 0 && area >= 0) {
//         console.log(`Town ${townName} has population of ${population} and area ${area} square km.`);
//     }
// }
//townInfo("Sofia", 1286383, 492);
//townInfo('LA', 1481353, 512);
//townInfo('Plovdiv', -45000, 100);
townInfo('Ka', 3600, -50);