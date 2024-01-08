const doc = document
const apikey = '36acd555cbebd983225df72592a09352'
const url = `https://api.openweathermap.org/data/2.5/weather?appid=${apikey}&units=metric&q=`

const search = doc.getElementById('search')
const weathericon = document.querySelector('#weather')
search.onsubmit = e => {
  e.preventDefault()
    let place = doc.getElementById('city').value;
    getWeather(place);
}

async function getWeather(place) {
  
    try {
        const response = await fetch(url + place);
        if (response.status == 404 || response.status == 400) {
            doc.querySelector('#place').innerText = "No City";
            doc.querySelector('#temperature').innerText = '-- °C';
            doc.querySelector('#humidity').innerText = '-- %';
            doc.querySelector('#wind').innerText = '-- km/hr';
            // doc.querySelector('#lat').innerText = '--° ' + '--°';
            doc.querySelector("#desc").innerText = '--';
            doc.getElementById("sunrise").innerText = '--';
            doc.getElementById("sunset").innerText = '--';
            // console.clear();
        }
        else {
            var data = await response.json();
            console.log(data);
            doc.querySelector('#place').innerText = data.name;
            doc.querySelector('#temperature').innerText = Math.round(data.main.temp) + '°C';
            doc.querySelector('#humidity').innerText = data.main.humidity + '%';
            doc.querySelector('#wind').innerText = data.wind.speed + ' km/hr';
            // doc.querySelector('#lat').innerText = data.coord.lat + '° / ' + data.coord.lon + '°';
            doc.querySelector("#desc").innerText = data.weather[0].description;
            let unix_timestamp = data.sys.sunrise;
            let date = new Date(unix_timestamp * 1000);
            let formattedTime = date.getHours()+":"+date.getMinutes();
            console.log(formattedTime);
            unix_timestamp = data.sys.sunset;
            date = new Date(unix_timestamp * 1000);
            let formattedTime2 = date.getHours()+":"+date.getMinutes();
            console.log(formattedTime2);
            doc.getElementById("sunrise").innerText = formattedTime;
            doc.getElementById("sunset").innerText = formattedTime2;


            if (data.weather[0].main == "Clouds") {
                weathericon.src = 'images/clouds.png';
            }
            else if (data.weather[0].main == "Rain") {
                weathericon.src = 'images/rain.png';
            }
            else if (data.weather[0].main == "Clear") {
                weathericon.src = 'images/clear.png';
            }
            else if (data.weather[0].main == "Drizzle") {
                weathericon.src = 'images/drizzle.png';
            }
            else if (data.weather[0].main == "Mist") {
                weathericon.src = 'images/mist.png';
            }
            else if (data.weather[0].main == "Snow") {
                weathericon.src = 'images/snow.png';
            }
        }
    }
    catch (error) {

}
}

getWeather('ludhiana');
