const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  
  const jokeContainer = document.querySelector('#jokeContainer')

  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((json) => jokeContainer.innerHTML = json.joke)
};



window.onload = () => fetchJoke();