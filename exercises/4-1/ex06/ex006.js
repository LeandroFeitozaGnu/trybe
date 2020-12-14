var pecaXadrez = 'CAvaLO';

switch (pecaXadrez.toLocaleLowerCase()){
    case 'rei':
        console.log('Rei -> Uma casa apenas para qualquer direção');
        break;
    case 'bispo':
        console.log('Bispo -> Diagonal');
        break;
    case 'rainha':
        console.log('Rainha -> Diagonal e Horizontal');
        break;
    case 'cavalo':
        console.log('Cavalo -> movimento em L pode pular sobre as peças');
        break;
    case 'torre':
        console.log('Torre -> Horizontal');
        break;
    case 'peão':
        console.log('Peão -> Apenas uma casa pra frente. No primeiro movimento podem ser duas');
        break;
    default:
        console.log('Erro, peça inválida');
        break;
}