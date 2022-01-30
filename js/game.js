const WIDTH = 400;
const HEIGH = 400;

let target = {
    x: getRandomNumber(WIDTH),
    y: getRandomNumber(HEIGH)
};

let $map = document.getElementById("map");

$map.addEventListener("click", function(e){
    let distance = getDistance(e, target);
    let distanceHint = getDistanceHint(distance);
});