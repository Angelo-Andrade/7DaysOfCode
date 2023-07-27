let back=0, front=0, hab;
const area = prompt(`Deseja seguir para a área de Back-End ou Front-End? Digite 1 para Back e 2 para Front.`);
do{
    if(area == 1){
        back++;
        const tecno = prompt(`Seguindo em Back, deseja aprender React ou Vue? Digite 1 para React e 2 para Vue.`);
        if(tecno == 1){
            hab = ['React'];
        }
        else if(tecno == 2){
            hab = ['Vue'];
        }
    }
    else if(area == 2){
        front++;
        const tecno = prompt(`Seguindo em Front, deseja aprender C# ou Java? Digite 1 para C# e 2 para Java.`);
        if(tecno == 1){
            hab = ['C#'];
        }
        else if(tecno == 2){
            hab = ['Java'];
        }
    }
    else{
        alert(`Dígito inválido!`);
    }
}while(area !=1 && area != 2);

for(let i=0;i<3;i++){
    if(area == 1){
        const desenv = confirm(`Sobre sua carreira, deseja continuar se desenvolvendo em Back-End?`);
        if(desenv == true){
            back++;
            alert(`Ótimo, você está no nível ${back} de desenvolvimento em Back-End.`);
        }
        else{
            front++;
            alert(`Interessante, você desenvolveu um nível em Front-End. Seu nível atual é ${front}`);
        }
    }
    else if(area == 2){
        let desenv = confirm(`Sobre sua carreira, deseja continuar se desenvolvendo em Front-End?`);
        if(desenv == true){
            front++;
            alert(`Ótimo, você está no nível ${front} de desenvolvimento em Back-End.`);
        }
        else{
            back++;
            alert(`Interessante, você desenvolveu um nível em Front-End. Seu nível atual é ${back}`);
        }
    }
}

do{
    novo = confirm('Tem mais alguma tecnologia que você gostaria de aprender?');
    if(novo == true){
        nTecs = prompt('Qual nova tecnologia deseja aprender');
        hab.push(nTecs);
    }
}while(novo == true);

if(back>0 && front>0){
    alert(`Esse foi seu desenvolvimento. Você terminou no nível ${back} em Back-End, e no nível ${front} em Front-End, basicamente um Full Stack. E as linguagens que você aprendeu foram: ${hab}.`);
}
else if(back>0 && front<0){
    alert(`Esse foi seu desenvolvimento. Você terminou no nível ${back} em Back-End. E as linguagens que você aprendeu foram: ${hab}.`);
}
else if(back<0 && front>0){
    alert(`Esse foi seu desenvolvimento. Você terminou no nível ${front} em Front-End. E as linguagens que você aprendeu foram: ${hab}.`);
}