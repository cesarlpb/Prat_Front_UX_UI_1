import WeatherBox from './weatherbox.js';
import { fetchWeather } from './fetchweather.js'
const { ipcRenderer } = require('electron');
import enableVisualTesting from './tests.js'

// Get testing settings and user config
const config = await ipcRenderer.invoke('getWeatherConfig');
const testingEnabled = config ? config.testing : true;
const userConfig = config ? config.location : { city: "Urithiru", latitude: 80.0000, longitude: 2.2222 };

if (testingEnabled) {
    ipcRenderer.send('open-dev-tools');
    enableVisualTesting()
} else {

    const weatherBox = new WeatherBox(document.querySelector('#weatherbox'), userConfig)

    async function updateWeatherDisplay() {
        const { weather, temperature } = await fetchWeather()
        weatherBox.updateWeather(weather, temperature)
    }

    updateWeatherDisplay()

    // Update every 15 minutes (900,000ms)
    setInterval(updateWeatherDisplay, 900000)

}