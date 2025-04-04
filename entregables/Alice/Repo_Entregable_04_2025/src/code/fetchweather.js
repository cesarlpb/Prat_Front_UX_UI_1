const { ipcRenderer } = require('electron');

class WeatherConfig {
    constructor() {
        this.config = null;
    }

    async loadConfig() {
        this.config = await ipcRenderer.invoke('getWeatherConfig');
    }

    get coordinates() {
        return this.config ? this.config.location : { latitude: 41.4960, longitude: 2.1565 };
    }
}

const weatherCodeMap = {
    0: (day) => day ? 'sun' : 'moon',
    1: (day) => day ? 'sun' : 'moon',
    2: (day) => day ? 'sunandclouds' : 'moonandclouds',
    3: 'cloudy',
    45: (day) => day ? 'sunandclouds' : 'moonandclouds',
    48: (day) => day ? 'sunandclouds' : 'moonandclouds',
    51: 'rainy', 53: 'rainy', 55: 'rainy',
    56: 'rainy', 57: 'rainy',
    61: 'rainy', 63: 'rainy', 65: 'rainy',
    66: 'rainy', 67: 'rainy',
    71: 'rainy', 73: 'rainy', 75: 'rainy',
    77: 'rainy',
    80: 'rainy', 81: 'rainy', 82: 'rainy',
    85: 'rainy', 86: 'rainy',
    95: 'rainy', 96: 'rainy', 99: 'rainy'
};

export async function fetchWeather() {
    const config = new WeatherConfig();
    await config.loadConfig();
    const { latitude, longitude } = config.coordinates;

    try {
        const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code,is_day&temperature_unit=celsius`
        );

        const data = await response.json();
        const current = data.current;

        const codeHandler = weatherCodeMap[current.weather_code] || 'cloudy';
        const weatherType = typeof codeHandler === 'function' 
            ? codeHandler(current.is_day === 1)
            : codeHandler;

        return {
            weather: weatherType,
            temperature: Math.round(current.temperature_2m)
        };
    } catch (error) {
        console.error('Weather fetch failed:', error);
        return { weather: 'cloudy', temperature: 20 };
    }
}