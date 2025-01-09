function areaOfFigures(figure, size1, size2) {

    if (figure === "square") {
        faceSquared = size1 * size1;
        console.log(faceSquared.toFixed(3));

    } else if (figure === "rectangle") {
        faceRectangle = size1 * size2;
        console.log(faceRectangle.toFixed(3));

    } else if (figure === "circle") {
        faceCircle = Math.PI * (size1 * size1);
        console.log(faceCircle.toFixed(3));

    } else if (figure === "triangle") {
        faceTriangle = (size1 * size2) / 2;
        console.log(faceTriangle.toFixed(3));

    }

}
areaOfFigures("square", 5);
areaOfFigures("rectangle", 7, 2.5);
areaOfFigures("circle", 6);
areaOfFigures("triangle", 4.5, 20);