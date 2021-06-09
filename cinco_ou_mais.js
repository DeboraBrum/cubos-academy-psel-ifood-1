function solucao(precos) {
    //seu codigo aqui
    let maisBarato = precos[0];
    let soma = 0;
    if(precos.length>=5){
        for(let item of precos){
            if (item<maisBarato){
                maisBarato=item;
            } 
        }
        for(let indice=0; indice<precos.length; indice++){
            soma+=precos[indice];
        }
        soma -= maisBarato;
    } else {
        for(let indice=0; indice<precos.length; indice++){
            soma+=precos[indice];
        }
    }
    console.log(soma);
    
    
}
