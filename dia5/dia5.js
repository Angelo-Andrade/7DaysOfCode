let frutas = [], laticinios = [], congelados = [], doces = [], listado=0;
do{
    let itens = prompt('Qual o item que deseja inserir na lista?'); 
    do{
        let classes = prompt('Qual a classe do item inserido? As classes são: Frutas, Laticínios, Congelados e Doces.');
        if(classes.toLowerCase() == 'frutas'){
            frutas.push(itens);
            listado = 1;
        }    
        else if(classes.toLowerCase() == 'laticínios'){
            laticinios.push(itens);
            listado = 1;
        }    
        else if(classes.toLowerCase() == 'congelados'){
            congelados.push(itens);
            listado = 1;
        }    
        else if(classes.toLowerCase() == 'doces'){
            doces.push(itens);
            listado = 1;
        }
        else if(classes != ''){
            alert('Classe inválida!');
        }
        else{
            break;
        }
    }while(listado == 0);
    
    do{
        acrescentar = prompt('Deseja acrescentar mais algum item na lista?');
        if(acrescentar.toLowerCase() != 'sim' && acrescentar.toLowerCase() != 'não'){
            alert('Comando inválido! Tente novamente.');
        }
    }while(acrescentar.toLowerCase() != 'sim' && acrescentar.toLowerCase() != 'não');

}while(acrescentar.toLowerCase() == 'sim');

const text = window.document.getElementById('texto');
text.innerHTML = '<p></p>';
if(frutas.length != 0){
    text.innerHTML = `<p>Frutas: ${frutas}.</p>`;
}
if(laticinios.length != 0){
    text.innerHTML += `<p>Laticínios: ${laticinios}.</p>`;
}
if(congelados.length != 0){
    text.innerHTML += `<p>Congelados: ${congelados}.</p>`;
}
if(doces.length != 0){
    text.innerHTML += `<p>Doces: ${doces}.</p>`;
}
if(listado == 0){
    text.innerHTML = `<p>Lista vazia! :(`;
}