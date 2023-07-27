function soma(x, y){
    return x+y;
}
function sub(x, y){
    return x-y;
}
function multi(x, y){
    return x*y;    
}
function divi(x, y){
    return x/y;
}
let operacao, resultado, num1, num2;
do{
    do{    
        operacao = prompt('*Soma   *Subtração  *Multiplicação  *Divisão     Dentre as opções, qual operação deseja fazer? Caso queira parar a calculadora, digite "sair".');
        if(operacao.toLowerCase() != 'soma' && operacao.toLowerCase() != 'subtração' && operacao.toLowerCase() != 'multiplicação' && operacao.toLowerCase() != 'divisão' && operacao.toLowerCase() != 'sair'){
            alert('Operação inválida! Tente novamente.');
        }
    }while(operacao.toLowerCase() != 'soma' && operacao.toLowerCase() != 'subtração' && operacao.toLowerCase() != 'multiplicação' && operacao.toLowerCase() != 'divisão' && operacao.toLowerCase() != 'sair');
    if(operacao.toLowerCase() != 'sair'){
        num1 = Number(prompt('Digite o primeiro número da operação: '));
        num2 = Number(prompt('Digite o segundo número da operação: ')); 
    }
    if(operacao.toLowerCase() == 'soma'){
        resultado = soma(num1, num2);
        alert(`O resultado da operação é ${resultado}`);
    }
    else if(operacao.toLowerCase() == 'subtração'){
        resultado = sub(num1, num2);
        alert(`O resultado da operação é ${resultado}`);
    }
    else if(operacao.toLowerCase() == 'multiplicação'){
        resultado = multi(num1, num2);
        alert(`O resultado da operação é ${resultado}`);
    }
    else if(operacao.toLowerCase() == 'divisão'){
        resultado = divi(num1, num2);
        alert(`O resultado da operação é ${resultado}`);
    }
    else if(operacao.toLowerCase() == 'sair'){
        alert('Até a próxima.');
    }
}while(operacao.toLowerCase() != 'sair');