function addAndSubtract(arr) {

    let modArr = [];
    let sumOriginal = 0;
    let sumModified = 0;

    for (let i = 0; i < arr.length; i++) {

        sumOriginal += arr[i];

        let curNum = Number(arr[i]);

        if (curNum % 2 == 0) {
            modArr.push(curNum + i);
        } else {
            modArr.push(curNum - i);
        }

        sumModified += modArr[i];
    }

    console.log(modArr);
    console.log(sumOriginal);
    console.log(sumModified);

}
addAndSubtract([5, 15, 23, 56, 35]);