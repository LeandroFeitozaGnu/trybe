const fetchPromisse = () => {
    const promisse = new Promise ((resolve, reject) => {
        const array = [];
        for (let i = 1; i < 11; i += 1) {
        array.push((Math.pow(Math.floor(Math.random() * 50),2)));
    };
        const result = array.reduce((acc, curr) =>   acc += curr ,0)
     if (result < 8000) {
         resolve()
     } else
        reject()
    });
    promisse
    .then(() => console.log('Funfa'))
    .catch(() => console.log('Tá fora'))
}
fetchPromisse();