// const CheckpointMaker = require("./CheckpointMaker");
// const Trackings = require("./UserTracking.json");
// const TrackingsComparison = require("./UserTrackingComparison.json");

// let features = [
//     { "type": "Feature", "properties": { "track_fid": 0, "track_seg_id": 0, "track_seg_point_id": 0 }, "geometry": { "type": "Point", "coordinates": [-105.277487, 38.9963613] } },
//     { "type": "Feature", "properties": { "track_fid": 0, "track_seg_id": 0, "track_seg_point_id": 1 }, "geometry": { "type": "Point", "coordinates": [-105.2774227, 38.9968032] } },
//     { "type": "Feature", "properties": { "track_fid": 0, "track_seg_id": 0, "track_seg_point_id": 2 }, "geometry": { "type": "Point", "coordinates": [-105.2773798, 38.9969908] } },
//     { "type": "Feature", "properties": { "track_fid": 0, "track_seg_id": 0, "track_seg_point_id": 3 }, "geometry": { "type": "Point", "coordinates": [-105.2771223, 38.9972326] } },
//     { "type": "Feature", "properties": { "track_fid": 0, "track_seg_id": 0, "track_seg_point_id": 4 }, "geometry": { "type": "Point", "coordinates": [-105.2764088, 38.9974077] } },
//     { "type": "Feature", "properties": { "track_fid": 0, "track_seg_id": 0, "track_seg_point_id": 5 }, "geometry": { "type": "Point", "coordinates": [-105.2760977, 38.9973035] } },
//     { "type": "Feature", "properties": { "track_fid": 0, "track_seg_id": 0, "track_seg_point_id": 6 }, "geometry": { "type": "Point", "coordinates": [-105.2757865, 38.9966906] } },
//     { "type": "Feature", "properties": { "track_fid": 0, "track_seg_id": 0, "track_seg_point_id": 7 }, "geometry": { "type": "Point", "coordinates": [-105.2755505, 38.9961361] } },
//     { "type": "Feature", "properties": { "track_fid": 0, "track_seg_id": 0, "track_seg_point_id": 8 }, "geometry": { "type": "Point", "coordinates": [-105.2757704, 38.9960152] } },
//     { "type": "Feature", "properties": { "track_fid": 0, "track_seg_id": 0, "track_seg_point_id": 9 }, "geometry": { "type": "Point", "coordinates": [-105.2762693, 38.9961153] } },
//     { "type": "Feature", "properties": { "track_fid": 0, "track_seg_id": 0, "track_seg_point_id": 10 }, "geometry": { "type": "Point", "coordinates": [-105.276677, 38.9962654] } },
//     { "type": "Feature", "properties": { "track_fid": 0, "track_seg_id": 0, "track_seg_point_id": 11 }, "geometry": { "type": "Point", "coordinates": [-105.2772349, 38.9961695] } },
//     { "type": "Feature", "properties": { "track_fid": 0, "track_seg_id": 0, "track_seg_point_id": 12 }, "geometry": { "type": "Point", "coordinates": [-105.2774066, 38.9962529] } },
//     { "type": "Feature", "properties": { "track_fid": 0, "track_seg_id": 0, "track_seg_point_id": 13 }, "geometry": { "type": "Point", "coordinates": [-105.2775085, 38.9963196] } }
// ]

// let featuresCompare = [
//     { "type": "Feature", "properties": { "track_fid": 0, "track_seg_id": 0, "track_seg_point_id": 0 }, "geometry": { "type": "Point", "coordinates": [-105.277487, 38.9963613] } },
//     { "type": "Feature", "properties": { "track_fid": 0, "track_seg_id": 0, "track_seg_point_id": 1 }, "geometry": { "type": "Point", "coordinates": [-105.2774227, 38.9968032] } },
//     { "type": "Feature", "properties": { "track_fid": 0, "track_seg_id": 0, "track_seg_point_id": 2 }, "geometry": { "type": "Point", "coordinates": [-105.2773798, 38.9969908] } },
//     { "type": "Feature", "properties": { "track_fid": 0, "track_seg_id": 0, "track_seg_point_id": 3 }, "geometry": { "type": "Point", "coordinates": [-105.2771759, 38.997291] } },
//     { "type": "Feature", "properties": { "track_fid": 0, "track_seg_id": 0, "track_seg_point_id": 4 }, "geometry": { "type": "Point", "coordinates": [-105.2764624, 38.9974786] } },
//     { "type": "Feature", "properties": { "track_fid": 0, "track_seg_id": 0, "track_seg_point_id": 5 }, "geometry": { "type": "Point", "coordinates": [-105.2760977, 38.9973035] } },
//     { "type": "Feature", "properties": { "track_fid": 0, "track_seg_id": 0, "track_seg_point_id": 6 }, "geometry": { "type": "Point", "coordinates": [-105.2757382, 38.9967031] } },
//     { "type": "Feature", "properties": { "track_fid": 0, "track_seg_id": 0, "track_seg_point_id": 7 }, "geometry": { "type": "Point", "coordinates": [-105.2755505, 38.9961361] } },
//     { "type": "Feature", "properties": { "track_fid": 0, "track_seg_id": 0, "track_seg_point_id": 8 }, "geometry": { "type": "Point", "coordinates": [-105.2757704, 38.9960152] } },
//     { "type": "Feature", "properties": { "track_fid": 0, "track_seg_id": 0, "track_seg_point_id": 9 }, "geometry": { "type": "Point", "coordinates": [-105.2762693, 38.9961153] } },
//     { "type": "Feature", "properties": { "track_fid": 0, "track_seg_id": 0, "track_seg_point_id": 10 }, "geometry": { "type": "Point", "coordinates": [-105.2767119, 38.9961455] } },
//     { "type": "Feature", "properties": { "track_fid": 0, "track_seg_id": 0, "track_seg_point_id": 11 }, "geometry": { "type": "Point", "coordinates": [-105.2770056, 38.9962414] } },
//     { "type": "Feature", "properties": { "track_fid": 0, "track_seg_id": 0, "track_seg_point_id": 12 }, "geometry": { "type": "Point", "coordinates": [-105.2772349, 38.9961695] } },
//     { "type": "Feature", "properties": { "track_fid": 0, "track_seg_id": 0, "track_seg_point_id": 13 }, "geometry": { "type": "Point", "coordinates": [-105.2774066, 38.9962529] } },
//     { "type": "Feature", "properties": { "track_fid": 0, "track_seg_id": 0, "track_seg_point_id": 14 }, "geometry": { "type": "Point", "coordinates": [-105.2775085, 38.9963196] } },
//     { "type": "Feature", "properties": { "track_fid": 0, "track_seg_id": 0, "track_seg_point_id": 15 }, "geometry": { "type": "Point", "coordinates": [-105.2774857, 38.9963373] } },
//     { "type": "Feature", "properties": { "track_fid": 0, "track_seg_id": 0, "track_seg_point_id": 16 }, "geometry": { "type": "Point", "coordinates": [-105.2774937, 38.9963383] } }
// ]

// let coord = [];
// let coord2 = [];

// featuresCompare.map((data) => {
//     coord2.push({
//         longitude: data.geometry.coordinates[1],
//         latitude: data.geometry.coordinates[0],
//     })
// })

// features.map((data) => {
//     coord.push({
//         longitude: data.geometry.coordinates[1],
//         latitude: data.geometry.coordinates[0],
//     })
// })
// let checkpoints = new CheckpointMaker(TrackingsComparison);

// checkpoints.makeCheckPoints()

// let compared = checkpoints.comparePoints(Trackings);

// if(!compared){
//     console.log(checkpoints.failed)
// }else{
//     console.log("pasa")
// }