function triangle(num) {

    for (let i = 1; i <= num; i++) {
        let curNum = "";

        for (let j = 1; j <= i; j++) {
            curNum += i + " ";
        }
        
        console.log(curNum);

    }
}
triangle(20);