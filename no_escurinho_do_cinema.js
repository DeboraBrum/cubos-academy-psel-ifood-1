function solucao(obj) {
	//seu codigo aqui
    if (obj.temIngresso){
        if (obj.idade>=obj.censura || obj.estaComPais){
            //meia ou inteira
            if(obj.idade<18 || obj.temCarteirinha){
                console.log("MEIA");
            } else{
                console.log("INTEIRA");
            }
        } else {
            console.log("ACESSO NEGADO");
        }
    } else {
        console.log("ACESSO NEGADO");
    }
}
