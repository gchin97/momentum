const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY= "f6e32c8945e10e50805cc312d238f4bf";

// 내장된 javascript 함수임
function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    // units=metric을 넣어서 섭씨로 바꿔줌
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    // url을 가져와서 시간이 걸리는 함수임, 
    fetch(url)
    // url을 제공할 시 웹브라우저에서 제공하는 모든 정보가 response.json임!!!!!!!
      .then((response) => response.json())
      .then((data) => {
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
      });
  }
  function onGeoError() {
    alert("Can't find you. No weather for you.");
  }
  
//   navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
  