function personalTitle(age, gender) {

    if (gender == "f") {
        if (age >= 16) {
            console.log("Ms.");
        } else {
            console.log("Miss");
        }
    } else {
        if (age >= 16) {
            console.log("Mr.");
        } else {
            console.log("Master");
        }
    }
}
personalTitle(12, "f");
personalTitle(13.5, "m");