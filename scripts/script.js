const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const updateUI = (data) => {

    // const cityDetails = data.cityDetails;
    // const weather = data.weather;

    // Destructure properties
    const {cityDetails, weather} = data;

    // Update details template
    details.innerHTML = `
        <h5 class="my-3">${cityDetails.LocalizedName} - ${cityDetails.AdministrativeArea.LocalizedName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `;

    // Update night and Day SVG's

    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);

    // let timeSrc = null;
    // if (weather.IsDayTime) {
    //     timeSrc = 'img/day.svg';
    // } else {
    //     timeSrc = 'img/night.svg'
    // }
    let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';

    time.setAttribute('src',timeSrc);

    // Remove the d-none class if present
    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }

};


const updateCity = async(city) => {

    const cityDetails = await getCity(city);
    const weather = await getWeather(cityDetails.Key);

    return {
        cityDetails, //cityDetails: cityDetails,
        weather //weather: weather
    };
};

cityForm.addEventListener('submit', e => {
    // prevent default action
    e.preventDefault();

    // Get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();

    // update the UI with the new city
    updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));
});