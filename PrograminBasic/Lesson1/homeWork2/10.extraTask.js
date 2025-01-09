function extraTask(a, b, c) {
    
    let isValid = 0;

    if (a + b > c && a + c > b && b + c > a) {
        isValid = true;
    } else {
        isValid = false;
    }

    if (isValid === true) {
        console.log(`The Triangle of Truth with sides ${a}, ${b}, and ${c} has been validated. Pen4o, you may begin your journey!`);  
    } else {
        console.log(`The Triangle of Truth with sides ${a}, ${b}, and ${c} is invalid. Pen4o remains stuck!`);
    }

}
//extraTask(3,4,5);
extraTask(1,2,3);