const getRandom = size => {
    return Math.floor(Math.random() * size);
}

const getDistance = (e, target) => {
    let diffX = e.offsetX - target.x;
    let diffY = e.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY + diffY));
}

let getDistanceHint = distance => {
    if(distance < 30){
        return "Hirviendo!!"
    }else if(distance < 60){
        return "Caliente..."
    }else if(distance < 100){
        return "Calido..."
    }else if(distance < 180){
        return "Muy cerca..."
    }else if(distance < 300){
        return "Frío..."
    }else if(distance < 400){
        return "Muy frío..."
    }else{
        return "Congelado"
    }
}