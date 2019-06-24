const request = require('request');
const chalk = require('chalk');

const geoCode = ((address,callback)=>{
    request({
        uri:"https://api.mapbox.com/geocoding/v5/mapbox.places/"+encodeURIComponent(address)+".json?access_token=pk.eyJ1IjoibGFraXRoIiwiYSI6ImNqeDRqZzljbDA3OTY0Y3BjczRvcmtzNTUifQ.cKU93z7YRWX2FbpfbAhhuw&limit=1",
        json:true,
        method: 'GET'
    },(error, response, body)=>{
        if(error) {
            callback("Unble to connect to the server - Check Your Internet Connection",undefined)
        } else if(!response.body.features.length) {
            callback("Invalied Location",undefined);
        } else {
            let latitude = response.body.features[0].center[0]; 
            let longitude =response.body.features[0].center[1];
            let placeName = response.body.features[0].place_name
            callback(undefined,{
                latitude:latitude,
                longitude:longitude,
                placeName:placeName
            });

            console.log("\n "+chalk.blue("Place Data"));
            console.log("\t"+chalk.green(" Place name  - ")+chalk.blue(placeName))
            console.log("\t"+chalk.green(" Latitude  - ")+chalk.blue(latitude))
            console.log("\t"+chalk.green(" Longitude  - ")+chalk.blue(longitude))
            console.log("\n\n")
        }
    
    })
})

module.exports = geoCode;