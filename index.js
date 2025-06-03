const API_KEY = "8f407c31e4814962bd6145112250106";

 function renderWeatherDetails(data){


  
      const newpara = document.createElement("div");
  newpara.innerHTML = `
    🌤️ Weather in ${data.location.city} <br>
    ☁️ Condition: ${data.current.condition.text} <br>
    🌡️ Temp: ${data.current.temp_c}°C <br>
    💨 Wind: ${data.current.wind_kph} km/h
    `;
    document.body.appendChild(newpara);
}
const fetchWeatherDetails = async () => {
  try {
    const city = "jharsuguda";
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
    );
    const data = await response.json();
    console.log(data);
    renderWeatherDetails(data);
  } catch (error) {
    console.log("error fetching", error);
  }
  
  
};


const getCustomWeatherDetails = async () => {
  try {
    const latitude = 20.72;
    const longitude = 83.33;

    const result = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${latitude},${longitude}`
    );
    const data = await result.json();
    console.log(data);
  } catch (error) {
    console.log("data not found",error);
  }
};

getCustomWeatherDetails();
