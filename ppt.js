function jogar(){
    let jogada;
    do{
        jogadar = prompt("Jogue pedra, papel ou tesoura: ").toLowerCase();
        if(!["pedra", "papel", "tesoura"].includes(jogada)){
            alert("Isso não está entre as opções!!!");
        }
    }while(![""])
}