function task1(n) {

    let result = n % 10;
    
    if (n % 10 === 5) {
        console.log(result);
        
    } else {
        console.log("error");
    }
    
}
task1(123);