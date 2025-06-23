function difference(arr) {

    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);
    }

    let evenSum = 0;
    let oddSum = 0;

    for (let num of arr) {
        if (num % 2 == 0) {
            evenSum += num;
        } else {
            oddSum += num;
        }
    }

    let result = evenSum - oddSum
    console.log(result);

}
difference([1, 2, 3, 4, 5, 6])
difference([3, 5, 7, 9]);
difference([2, 4, 6, 8, 10])