const key = 'jmqLFd81wlxyv3MQgBTTgCTrZ9QqSqMT';

// Get weather information
const getWeather = async(cityKey) => {

    const base ='https://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${cityKey}?apikey=${key}&language=pt-br`;

    const response = await fetch(base+query);
    const data = await response.json();

    return data[0];

};

// Request of the Data from the API
// This is an async functions, it returns a promisse
// get city information
const getCity = async(city) => {

    const base = 'https://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];

};

// getCity('Limeira').then(data => {
//     return getWeather(data.Key);
// }).then(data => {
//     console.log(data);
// }).catch(err => console.log(err));

