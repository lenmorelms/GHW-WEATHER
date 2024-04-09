import fetch from 'node-fetch';
const API_KEY = '5f6913c1c715dd5b4230b8b432630bb6';
const latitude = '-17.858560';
const longitude = '31.024742';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('There was a problem with your fetch operation:', error);
  });