function gramophone(band, album, songName) {

    let sec1 = 0;
    let sec2 = 0;
    let sec3 = 0;

    for (let i = 0; i < album.length; i++) {
        sec1++;
    }

    for (let i = 0; i < band.length; i++) {
        sec2++;
    }

    for (let i = 0; i < songName.length; i++) {
        sec3++;
    }

    let duration = (sec1 * sec2) * sec3 / 2;
    let totalTimes = Math.ceil(duration / 2.5);

    console.log(`The plate was rotated ${totalTimes} times.`);

}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs');
gramophone('Rammstein', 'Sehnsucht', 'Engel');

function gramophone(band, album, songName) {

    let duration = (band.length * album.length) * songName.length / 2;
    let totalTimes = Math.ceil(duration / 2.5);

    console.log(`The plate was rotated ${totalTimes} times.`);

}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs');
gramophone('Rammstein', 'Sehnsucht', 'Engel');