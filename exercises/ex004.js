// Quando a Promise for rejeitada, imprima, via console.log, a frase "É mais de oito mil! Essa promise deve estar quebrada!"
const fetchPromise = () => {
  const myPromise = new Promise((resolve, reject) => {

    const randomArray = Array.from({length: 10}, () => Math.floor(Math.random() * 50))
    const sum = randomArray.map((number) => number * number)
      .reduce((acc, curr) => acc + curr, 0 );
      (sum < 8000 ) ? resolve(sum) : reject(sum);
  });

  myPromise
    .then(sum => [2, 3, 5, 10].map(element => console.log(sum / element)))
    .catch((sum) => console.log("É mais de oito mil! Essa promise deve estar quebrada!"))
}

fetchPromise()