function calculateIMC(peso, altura) {
  return  (peso / ( Math.pow(altura, 2)))
}



module.exports = {
  calculateIMC
}; 