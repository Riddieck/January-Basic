function moving(arr) {
    
    let box = 1;
    let l = Number(arr[0]);
    let w = Number(arr[1]);
    let h = Number(arr[2]);

    let sum = 0

    let totalSpace =  l * w * h;
    
    let i = 3;

    while (arr[i] !== "Done" && i < arr.length) {

        let curruntNum = Number(arr[i]);
        sum += curruntNum;
        if (sum > totalSpace) {
            console.log(`No more free space! You need ${sum - totalSpace} Cubic meters more.`);
            break;
        }

        i++;
    }
    
    if (arr[i] === "Done") {
        console.log(`${totalSpace - sum} Cubic meters left.`);
    }
}
moving(["10", "10", "2", "20", "20", "20", "20", "122"]);
moving(["10", "1", "2", "4", "6", "Done"]);