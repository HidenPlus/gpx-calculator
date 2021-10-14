let routePointsList = [{
    latitude: 34.032865,
    longitude: -84.30381
}, {
    latitude: 34.03183833333333,
    longitude: -84.30457833333334,
}, {
    latitude: 34.029185,
    longitude: -84.305635
}];

let newDatas = []

let latitude1 = 8.600;
let longitude1 = -3.3221;
let meters = 50 * 0.0000089;
let cos = Math.cos,
    pi = Math.PI,
    R = 6378137,
    m = (1 / ((2 * pi / 360) * R)) / 1000

function degreesToRadians(degrees) {
    return degrees * Math.PI / 180;
}

let distance = function (lat1, lng1, lat2, lng2) {
    // El radio del planeta tierra en metros.
    let dLat = degreesToRadians(lat2 - lat1);
    let dLong = degreesToRadians(lng2 - lng1);
    let a = Math.sin(dLat / 2)
        *
        Math.sin(dLat / 2)
        +
        Math.cos(degreesToRadians(lat1))
        *
        Math.cos(degreesToRadians(lat1))
        *
        Math.sin(dLong / 2)
        *
        Math.sin(dLong / 2);

    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let distance = R * c;

    return distance;
}

routePointsList.map((data, index) => {
    let diferenceLat = distance(data.latitude, data.longitude, routePointsList[index + 1] ? routePointsList[index + 1].latitude : routePointsList[index].latitude, routePointsList[index + 1] ? routePointsList[index + 1].longitude : routePointsList[index].longitude);
    let diferenceLon = distance(data.longitude, data.longitude, routePointsList[index + 1] ? routePointsList[index + 1].longitude : routePointsList[index].longitude, routePointsList[index + 1] ? routePointsList[index + 1].longitude : routePointsList[index].longitude);
    console.log(diferenceLon, diferenceLat)
    newDatas.push({
        longitude: data.longitude + (diferenceLon * m) / cos(data.latitude * (pi / 180)),
        latitude: data.latitude + (diferenceLat * m) / cos(data.longitude * (pi / 180))
    })
})

console.log(routePointsList, `\n`, newDatas)