function solucao(joao, andre) {
    // Escreva seu codigo aqui
    
    const pedra="PEDRA";
    const tesoura="TESOURA";
    const papel="PAPEL";

    if(joao===pedra){
        if(andre===tesoura){
        console.log("JOAO")}
        else if (andre===papel){
            console.log("ANDRE");
        }
        else {
            console.log("EMPATE")
        }
    } else if(joao===papel){
        if(andre===tesoura){
            console.log("ANDRE");
        } else if(andre===pedra){
            console.log("JOAO");
        } else {
            console.log("EMPATE");
        }
    }
    else{
        if(andre===papel){
            console.log("JOAO");
        } else if (andre===pedra){
            console.log("ANDRE");
        } else{
            console.log("EMPATE");
        }
    }
}
