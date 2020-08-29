const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
	const myObject = {
		method: 'GET',
		headers: { 'Accept': 'application/json' }
	};
	
	fetch(API_URL, myObject)
		.then(response => response.json())
		.then(object => {
			putInJoke(object.joke)
		})
};

const putInJoke = (object) => {
	const getJokeContainer = document.querySelector('#jokeContainer')
	getJokeContainer.innerHTML = object

}


window.onload = () => fetchJoke();