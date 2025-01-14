function worldSwimRecord(recordInSec, range, timeInSecForMeter) {

    let currentTime = (range * timeInSecForMeter);
    let addedTime = ((Math.floor(range / 15)) * 12.5);

    let finalTime = currentTime + addedTime;

    if (recordInSec > finalTime) {
        console.log(`Yes, he succeeded! The new world record is ${finalTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(finalTime - recordInSec).toFixed(2)} seconds slower.`);
    }

}
worldSwimRecord(10464, 1500, 20);
worldSwimRecord(55555.67, 3017, 5.03);