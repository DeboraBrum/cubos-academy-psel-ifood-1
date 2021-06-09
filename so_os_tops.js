function solucao(produtos) {
	//seu codigo aqui
    let soma=0;
    let somat=0;
    
    for (let item of produtos){
        if (item.preco>10000){
            soma+=item.preco;
        } 
        somat+=item.preco;
    }
    let porcentagem = soma/somat;
        
    const result={
        totalTop: soma,
        percentual: porcentagem
    }
    
    console.log(result);
}