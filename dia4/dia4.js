const numero = Math.floor(Math.random() * (10 - 1 + 1) + 1);
alert('Um número inteiro aleatório de 1 a 10 foi gerado. Dívido você acertar!');
let resultado = false;
for(let i=3;i>0;i--){
    const tentativa = Number(prompt('Qual número de 1 a 10 você acha que é?'));
    if(numero == tentativa){
        alert(`Parabéns, você acertou! O número era ${numero}`);
        resultado = true;
        break;
    }
    else if(i>1){
        alert(`Não foi dessa vez. Você tem mais ${i-1} tentativas.`);
        resultado = false;
    }
}
if(!resultado){
    alert(`Que pena, infelizmente você não conseguiu. O número era ${numero}`);
}