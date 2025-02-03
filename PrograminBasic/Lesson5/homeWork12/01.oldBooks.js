function oldBooks(arr) {

    let favouriteBook = arr[0];
    let i = 1;
    let currentBook = "";
    let count = 0;

    while (i < arr.length) {

        currentBook = arr[i];

        if (currentBook === favouriteBook) {
            console.log(`You checked ${count} books and found it.`);
            break;
        } else if (currentBook === "No More Books") {
            console.log(`The book you search is not here!`);
            console.log(`You checked ${count} books.`);
            break;
        }

        count++;
        i++;
    }
}
oldBooks(["Troy",
    "Stronger",
    "Life Style",
    "Troy"
])