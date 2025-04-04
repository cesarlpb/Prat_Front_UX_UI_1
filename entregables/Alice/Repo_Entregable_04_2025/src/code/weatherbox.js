class WeatherBox {
    constructor(elementWeatherBox, userConfig) {
        this.element = elementWeatherBox;
        this.userConfig = userConfig;
    }

    updateWeather(weather, temperature) {
        const weatherLower = weather.toLowerCase();
        const weatherData = this._getWeatherData(weatherLower);
        const thermometer = this._getThermometerImage(temperature);
        
        this._logParameters(weatherLower, temperature);

        this.element.innerHTML = `
            <img id="weatherdrawing" src="../graphic_res/weather/${weatherData.image}.png">
            <p id="weathertext">${weatherData.text}</p>
            <p id="temperaturetext">${temperature} ºC</p>
            <img id="thermometerdrawing" src="../graphic_res/thermometer/${thermometer}.png">
        `;
    }

    _getWeatherData(weather) {
        const baseText = (weather === 'moonandclouds' || weather === 'moon') 
            ? 'Tonight it is' 
            : 'Today it is';
        
        const weatherMap = {
            rainy: { image: 'Rainy', text: 'RAINY' },
            cloudy: { image: 'Cloudy', text: 'CLOUDY' },
            sunandclouds: { image: 'SunAndClouds', text: 'CLOUDY' },
            moonandclouds: { image: 'MoonAndClouds', text: 'CLOUDY' },
            sun: { image: 'Sun', text: 'SUNNY' },
            moon: { image: 'Moon', text: 'CLEAR' }
        };
        
        return {
            image: weatherMap[weather].image,
            text: `${baseText}<br><strong>${weatherMap[weather].text}</strong>`
        };
    }

    _getThermometerImage(temp) {
        if (temp < 5) return 'ThermometerFreezing';
        if (temp < 15) return 'ThermometerLow';
        if (temp < 22) return 'ThermometerMid';
        if (temp < 30) return 'ThermometerHigh';
        return 'ThermometerMelting';
    }

    _logParameters(weather, temperature) {
        console.log(`Weather Update Received:
        - Type: ${weather}
        - Temperature: ${temperature}°C
        - User config: 
            -> City: ${this.userConfig.city}
            -> Latitude: ${this.userConfig.latitude}
            -> Longitude: ${this.userConfig.longitude}
        [${new Date().toLocaleTimeString()}]`);
    }
}

export default WeatherBox