function solucao(tempo, distancia) {
	//seu codigo aqui
    let preco =0;
    if(tempo<5){
        console.log("600");
    } else if (tempo<=60){
        preco = (tempo*100) + (50*distancia);
        console.log(preco);
    } else{
        if(distancia<100){
            preco = distancia*200;
            console.log(preco);
        } else {
            preco = distancia*150;
            console.log(preco);
        }
    }
    

}
