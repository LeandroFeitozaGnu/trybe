function calculateIMC(peso, altura) {
  return  (peso / ( Math.pow(altura, 2)))
}

console.log(calculateIMC(95, 1.80))

module.exports = {
  calculateIMC
}; 