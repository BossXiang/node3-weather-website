const request = require('request')
const chalk = require('chalk')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=10313193af85c57e1d9af339bd091e0b&query=' + latitude + ',' + longitude
    
    request({url, json: true}, (error, {body}) => {
        if(error) {
            callback('Unable to connect to weather services.', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, {
                forecastData: 'The weather is ' + body.current.weather_descriptions[0] +'.  Temperature: ' + body.current.temperature + 
                '.  Humidity: ' + body.current.humidity + '.  Visibility: ' + body.current.visibility
            })
        }
    })
}

module.exports = forecast