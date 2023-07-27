let frutas = [], laticinios = [], congelados = [], doces = [], listado=0, itens, acrescentar = 'sim', remover = 'não', pos, continuar = false, encontrados = 0;
do{
    if(acrescentar == 'sim'){    
        do{
            itens = prompt('Qual o item que deseja inserir na lista?');
            if(frutas.includes(itens)){
                encontrados++;
                alert('Item já inserido na classe "Frutas" da lista.');
            }
            else if(laticinios.includes(itens)){
                encontrados++;
                alert('Item já inserido na classe "Laticínios" da lista.')
            }
            else if(congelados.includes(itens)){
                encontrados++;
                alert('Item já inserido na classe "Congelados" da lista.')
            }
            else if(doces.includes(itens)){
                encontrados++;
                alert('Item já inserido na classe "doces" da lista.')
            }
            else{
                encontrados = 0;
            }
        }while(encontrados != 0);

        do{
            let classes = prompt('Qual a classe do item inserido? As classes são: Frutas, Laticínios, Congelados e Doces.');
            if(classes.toLowerCase() == 'frutas'){
                frutas.push(itens);
                listado++;
                continuar = true;
            }    
            else if(classes.toLowerCase() == 'laticínios'){
                laticinios.push(itens);
                listado++;
                continuar = true;
            }    
            else if(classes.toLowerCase() == 'congelados'){
                congelados.push(itens);
                listado++;
                continuar = true;
            }    
            else if(classes.toLowerCase() == 'doces'){
                doces.push(itens);
                listado++;
                continuar = true;
            }
            else if(classes != ''){
                alert('Classe inválida!');
                continuar = false;
            }
            else{
                continuar = true;
                break;
            }
        }while(continuar == false);
    }
    do{
        acrescentar = prompt('Deseja acrescentar mais algum item na lista?').toLowerCase();
        console.log(acrescentar);
        if(acrescentar != 'sim' && acrescentar != 'não'){
            alert('Comando inválido! Tente novamente.');
        }
        if(acrescentar == 'sim'){
            remover == 'não';
        }
    }while(acrescentar != 'sim' && acrescentar != 'não');
    if(listado>0 && acrescentar != 'sim'){
        do{
            remover = prompt('Deseja remover algum item da lista?').toLowerCase();
            if(remover != 'sim' && remover != 'não'){
                alert('Comando inválido! Tente novamente.');
            }
        }while(remover != 'sim' && remover != 'não');
    }
    if(remover == 'sim' && listado>0){
        itens = prompt(`Lista completa: ${frutas},${laticinios},${congelados},${doces}. Qual item deseja remover da lista?`);
        if(frutas.indexOf(itens) != -1){
            pos = frutas.indexOf(itens);
            if((frutas.length-1) > pos){
                frutas.splice(pos, 1);
                frutas[pos] = frutas.pop();
            }
            else{
                frutas.pop();
            }                    
            listado--;
        }
        else if(laticinios.indexOf(itens) != -1){
            pos = laticinios.indexOf(itens);
            if((laticinios.length-1) > pos){
                laticinios.splice(pos, 1);
                laticinios[pos] = laticinios.pop();;
            }
            else{
                laticinios.pop();
            }
            listado--;
        }
        else if(congelados.indexOf(itens) != -1){
            pos = congelados.indexOf(itens);
            if((congelados.length-1) > pos){
                congelados.splice(pos, 1);
                congelados[pos] = congelados.pop();;
            }
            else{
                congelados.pop();
            }
            listado--;
        }
        else if(doces.indexOf(itens) != -1){
            pos = doces.indexOf(itens);
            if((doces.length-1) > pos){
                doces.splice(pos, 1);
                doces[pos] = congelados.pop();
            }
            else{
                doces.pop();
            }
            listado--;
        }
        else{
            alert('Item não encontrado na lista!');
        }
    }
}while(acrescentar == 'sim' || remover == 'sim');

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