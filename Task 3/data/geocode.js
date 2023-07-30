
const request = require ('request')

const geocode = (address , callback) => {
    const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + 'Los%20Angeles.json?access_token=pk.eyJ1IjoiYXNzZW0zMyIsImEiOiJjbGtvdWliejExYW5oM2RwbHIyZ2J2MGNpIn0.mac_1jcX-GTFBpw5gZXsoQ'
    
    request ({url : geocodeUrl , json : true} , (error , response) => {
        if (error) {
            callback ("unable to connect geocode Service" , undefined)
        }
        else if (response.body.message) {
            callback (response.body.message , undefined)
        }
        else if (response.body.features.length == 0){
             callback ("Unable to find location"  , undefined)
        } 
        else {
            callback (undefined , {
                 longtitude :  response.body.features[0].center[0] ,
                 latitude : response.body.features[0].center[1]
            } )
        }
    } )
    }

    module.exports = geocode;