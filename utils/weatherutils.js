const request = require('request');
const chalk = require('chalk');

const weatherCode = (latitude,longitude,callback) => {
    request({
        method:"GET",
        json:true,
        uri:"https://api.darksky.net/forecast/a187c056ec5d2c9e1385cd06b4fe799e/"+encodeURIComponent(latitude)+","+encodeURIComponent(longitude)
    },(error, response, body)=>{
        if(error) {
            callback("Unble to connect to the server - Check Your Internet Connection",undefined);
        } else if(response.body.error) {
            callback(response.body.error,undefined);
        } else {
            callback(undefined,chalk.green("Weather - ")+response.body.currently.summary+"\n"+chalk.red("Temprature - ")+response.body.currently.temperature+"\n\n");
        }
    })
}

module.exports=weatherCode;
