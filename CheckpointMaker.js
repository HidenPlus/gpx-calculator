const geolib = require('geolib');
//Module to import and make the comparison between 2 array points. Example:
/* 

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

let routePointsListToCompare = [
    {
        latitude: 30.032865,
        longitude: -84.30381
    },
    {
        latitude: 36.032865,
        longitude: -84.30381
    }, {
        latitude: 32.03183833333333,
        longitude: -84.30457833333334,
    }, {
        latitude: 34.129185,
        longitude: -84.305635
}];
Author: Yojhan Alejandro Atuesta Mendoza
Please be free to make this code better 
*/

class CheckpointMaker {
    //Please set the origin routes to make the checkpointss in the constructor
    //All the code in the constructor it´s used to make the conversion and get the distance in meters 
    constructor(routes) {
        this.checkpoints = [];
        this.routePointsList = routes;
        this.cos = Math.cos;
        this.pi = Math.PI;
        this.R = 6378137;
        this.m = (1 / ((2 * this.pi / 360) * this.R)) / 1000;
        this.distance = function (lat1, lng1, lat2, lng2) {
            let dLat = this.degreesToRadians(lat2 - lat1);
            let dLong = this.degreesToRadians(lng2 - lng1);
            let a = Math.sin(dLat / 2)
                *
                Math.sin(dLat / 2)
                +
                Math.cos(this.degreesToRadians(lat1))
                *
                Math.cos(this.degreesToRadians(lat1))
                *
                Math.sin(dLong / 2)
                *
                Math.sin(dLong / 2);

            let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            let distance = this.R * c;

            return distance.toFixed(3);
        }
        this.distance2 = function (position1, position2) {
            var lat1 = position1.latitude;
            var lat2 = position2.latitude;
            var lon1 = position1.longitude;
            var lon2 = position2.longitude;
            var R = 6371000; // metres
            var φ1 = this.degreesToRadians(lat1);
            var φ2 = this.degreesToRadians(lat2);
            var Δφ = this.degreesToRadians(lat2 - lat1);
            var Δλ = this.degreesToRadians(lon2 - lon1);

            var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
                Math.cos(φ1) * Math.cos(φ2) *
                Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

            var d = R * c;
            return d;
        }
    }

    degreesToRadians(degrees) {
        return degrees * Math.PI / 180;
    }

    //Make the checkpoints to compare between the 2 points
    makeCheckPoints() {
        this.routePointsList.map((mapped, index) => {
            let diferenceLat = this.distance(mapped.latitude, mapped.longitude, this.routePointsList[index + 1] ? this.routePointsList[index + 1].latitude : this.routePointsList[index].latitude, this.routePointsList[index + 1] ? this.routePointsList[index + 1].longitude : this.routePointsList[index].longitude);
            let diferenceLon = this.distance(mapped.longitude, mapped.longitude, this.routePointsList[index + 1] ? this.routePointsList[index + 1].longitude : this.routePointsList[index].longitude, this.routePointsList[index + 1] ? this.routePointsList[index + 1].longitude : this.routePointsList[index].longitude);
            // console.log(diferenceLat, diferenceLon)
            this.checkpoints.push({
                latitude: mapped.latitude + ((diferenceLat + 50) * this.m) / this.cos(mapped.longitude * (this.pi / 180)),
                longitude: mapped.longitude + ((diferenceLon + 50) * this.m) / this.cos(mapped.latitude * (this.pi / 180))
            });
        });
        // console.log(this.checkpoints)
        return this.checkpoints;
    }

    comparePoints(pointsToCompare) {
        let result;
        let nearest = [];
        let indexes = [];
        let near;
        let diferenceLat;
        pointsToCompare.map((point, index) => {
            near = geolib.findNearest(point, this.routePointsList);
            diferenceLat = this.distance2(near, point);
            if (diferenceLat <= 0.05) {
                indexes.push(index);
                nearest.push(near);
            }
        });
        for (let i = 0; indexes.length > i; i++) {
            if (i != 0) {
                console.log(indexes[i - 1], (indexes[i] - 1));
                if (indexes[i - 1] != (indexes[i] - 1)) {
                    result = { error: "no ordered indexes" };
                    break;
                } else {
                    result = { success: "all indexes sorted" };
                }
            }
        }
        return result;
    }


}

module.exports = CheckpointMaker;