function printing(start, end) {

    let nums = "";
    let sum = 0;
    for (let i = start; i <= end; i++) {

        sum += i;
        nums += i + " ";
    }

    console.log(nums);
    console.log(`Sum: ${sum}`);

}
printing(5, 10);
printing(50, 60);