const request = require("request")  

const weather = (latitude, longtitude ,callback) => {

    const url = "http://api.weatherapi.com/v1/current.json?key=ee65e72c52674bb5a2325612233007&q=London&aqi=no" + latitude + "," + longtitude

    request({url , json : true}  , (error , response)=>{
        if(error){
            callback ("Unable to connect weather service" , undefined)
        }else if (response.body.error){
            callback (response.body.error.message , undefined)
        }else {
            callback (undefined , response.body.location.name + ' It Is  ' + response.body.current.condition.text 
                + " And Temp   " + response.body.current.temp_c    )
        }
    })
}

module.exports = weather;