const getRandom = size => {
    return Math.floor(Math.random() * size);
}

const getDistance = (e, target) => {
    let diffX = e.offsetX - target.x;
    let diffY = e.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY + diffY));
}