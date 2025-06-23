function reverse(n, params) {

    let reversed = [];

    for (let i = n - 1; i >= 0; i--) {
        reversed.push(params[i]);
    }

    console.log(reversed.join(' '));

}
reverse(3, [10, 20, 30, 40, 50]);
reverse(4, [-1, 20, 99, 5]);