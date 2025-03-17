function getWeather() {
    const city = document.getElementById("cityInput").value.trim();
    const apiKey = "96211509357644f7af495938251703";
  
    if (!city) {
      document.getElementById("errorMsg").innerText = "Please enter a city name!";
      document.getElementById("weatherResult").classList.add("d-none");
      return;
    }
  
    fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`)
      .then((response) => {
        if (!response.ok) throw new Error("City not found");
        return response.json();
      })
      .then((data) => {
        document.getElementById("errorMsg").innerText = "";
  
        document.getElementById("cityName").innerText = `${data.location.name}, ${data.location.country}`;
        document.getElementById("temperature").innerText = `${data.current.temp_c}°C`;
        document.getElementById("conditionText").innerText = data.current.condition.text;
        document.getElementById("weatherIcon").src = `https:${data.current.condition.icon}`;
  
        document.getElementById("weatherResult").classList.remove("d-none");
      })
      .catch((error) => {
        document.getElementById("errorMsg").innerText = error.message;
        document.getElementById("weatherResult").classList.add("d-none");
      });
  }
  