function replace(params) {

    for (let i = 0; i < params.length / 2; i++) {

        let j = params.length - 1 - i;

        let temp = params[i];
        params[i] = params[j];
        params[j] = temp;
    }

    console.log(params.join(' '));

}
replace(['a', 'b', 'c', 'd', 'e']);