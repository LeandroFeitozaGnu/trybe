// Agora, um passo para trás: vamos fazer, passo a passo, uma Promise. Primeiramente, instancie uma Promise. Dentro dela, você deve produzir um array com dez números aleatórios de 1 a 50 e elevá-los todos ao quadrado. Se a soma de todos esses elementos for inferior a 8000, a promise deve ser resolvida. Caso contrário, ela deve ser rejeitada. Acresça um then e um catch à Promise com qualquer coisa dentro só para que o código funcione.

const fetchPromise = () => {
  const myPromise = new Promise((resolve, reject) => {
    // for(i = 0; i < 10; i ++) {
    //   array.push(Math.floor(Math.random() * 51));
    // }  
    const randomArray = Array.from({length: 10}, () => Math.floor(Math.random() * 50))
    const sum = randomArray.map((number) => number * number)
      .reduce((acc, curr) => acc + curr, 0 );
      (sum < 8000 ) ? resolve(sum) : reject();
  });

  myPromise
    .then(() => console.log(`Deu bom `))
    .catch(() => console.log(`Deu ruim `))
}

fetchPromise()