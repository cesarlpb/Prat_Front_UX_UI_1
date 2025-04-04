import  WeatherBox  from './weatherbox.js'

function enableVisualTesting () {
    console.log('Loaded For Testing')

    
    // Dummy config
    const userConfig = { city: "Urithiru", latitude: 80.0000, longitude: 0.0000 };

    const weatherBox = new WeatherBox(document.querySelector('#weatherbox'), userConfig);

    // Enum to have clean record of possible weather names
    const WEATHER_TYPES = [
        'rainy',
        'cloudy',
        'sunandclouds',
        'moonandclouds',
        'sun',
        'moon'
    ];

    const testCases = [
        // Freezing temperatures
        { weather: 'moon', temp: -5 },        // Freezing clear night
        { weather: 'moonandclouds', temp: 3 },// Freezing cloudy night
        { weather: 'rainy', temp: 2 },        // Freezing rain
        
        // Cold temperatures
        { weather: 'cloudy', temp: 8 },       // Chilly cloudy day
        { weather: 'sunandclouds', temp: 12 },// Cool partly cloudy
        
        // Mild temperatures
        { weather: 'sun', temp: 18 },         // Mild sunny day
        { weather: 'cloudy', temp: 20 },      // Mild overcast
        
        // Warm temperatures
        { weather: 'sunandclouds', temp: 25 },// Warm partly cloudy
        { weather: 'sun', temp: 28 },         // Hot sunny day
        
        // Extreme temperatures
        { weather: 'moon', temp: 32 },        // Hot clear night
        { weather: 'rainy', temp: -10 },      // Extreme cold rain
        { weather: 'sun', temp: 45 }          // Heat wave
    ];

    let caseIndex = 0;

    weatherBox.updateWeather(testCases[0].weather, testCases[0].temp);

    setInterval(() => {
        caseIndex = (caseIndex + 1) % testCases.length;
        const current = testCases[caseIndex];
        weatherBox.updateWeather(current.weather, current.temp);
    }, 2000);
};

export default enableVisualTesting