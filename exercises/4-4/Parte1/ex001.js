let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };
//Step 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.
  console.log('Bem vinda, ' + info.personagem)

  //Step 2 - Insira no objeto uma nova propriedade com o nome de chave "recorrente" e o valor "Sim" e, em seguida, imprima o objeto no console.
  info.recorrente = 'Sim'

  //Step 3 - Faça um for/in que mostre todas as chaves do objeto.
  for(propriedade in info) {
      console.log(propriedade);
  };

  //Step 4 - Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto.
  for(indice in info) {
      console.log(info[indice]);
  };

  //Step 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: "Tio Patinhas", "Christmas on Bear Mountain, Dell's Four Color Comics #178", "O último MacPatinhas", "Sim".
  let info2 = {
      personagem: 'Tio Patinhas',
      origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
      nota: 'O último MacPatinhas',
      recorrente: 'Sim'
  }
  console.log(info.personagem + ' e ' + info2.personagem);
  console.log(info.origem + ' e ' + info2.origem);
  console.log(info.nota + ' e ' + info2.nota)
  console.log('Ambos recorrentesS')