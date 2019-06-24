const geoCode = require("./utils/geoutils");
const weatherCode = require("./utils/weatherutils");
var prompt = require('prompt');
const chalk = require('chalk');

console.log("\n\t\t "+chalk.blue("Welcome To the")+chalk.red(" Dark Sky")+chalk.blue(" Weather Predection App"+chalk.green(" !!\n")))

prompt.start();

let address = null; 

prompt.get([{
    name: 'Address',
    required: true
    // pattern: /^[a-zA-Z0-9\s\-]+$/
}], function (err, result) {
    address =  result.Address;

    geoCode(address,(error,data) => {
        if(error){
            console.log("Error 1 - "+ error);
        } else {
            let response = data;
            weatherCode(response.latitude,response.longitude,(error,data) => {
                if(error){
                    console.log("Error 2 - "+ error);
                } else {
                    console.log(data);
                }
            });
        }
    })
});



// console.log("\n"+address);