const fetchPromisse = () => {
    const promisse = new Promise ((resolve, reject) => {
        const array = [];
        for (let i = 1; i < 11; i += 1) {
        array.push((Math.pow(Math.floor(Math.random() * 50),2)));
    };
        const resultado = array.reduce((acc, curr) => acc += curr ,0)
        console.log(resultado)
     if (resultado < 8000) {
         resolve(resultado)
     } else
        reject()
    });
    promisse
    .then(resultado =>  [2, 3, 5, 10].map(element => Math.round(resultado / element)))
    .catch(() => console.log('É mais de oito mil! Esta promisse deve estar quebrada!'))
}
fetchPromisse();

