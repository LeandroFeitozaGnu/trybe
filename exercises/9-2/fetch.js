const fetch = require ('node-fetch');
//const { resolve } = require('path');
async function verifiedFetch (url) {
	return new Promise((resolve, reject) => {
		if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
            fetch(url) 
            // resolve
				.then((response) => response.json())
				.then((response) => resolve(response.value))				
		} else {
			throw new Error('endpoint não existe')
		}
	});
};

async function sendJokeToFriend(name) {
    const message = await verifiedFetch('https://api.chucknorris.io/jokes/random?category=dev')
      .then((joke) => `Oi ${name}, ouve essa: ${joke}`)
      .catch((err) => err);
    console.log(message);
  }
  
  sendJokeToFriend("Anna")

