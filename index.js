let maria = {
    qnt: 2,
    comeu: function(){
        maria.qnt--;
    },
    darMacaParaJoao: function(){
        maria.qnt--;
        joao.qnt++;
    },
    comprarMaca: function(){
        maria.qnt++;
    }
}

let joao = {
    qnt: 1,
    comeu: function(){
        joao.qnt--;
    },
    darMacaParaMaria: function(){
        joao.qnt--;
        maria.qnt++;
    },
    comprarMaca: function(){
        joao.qnt++;
    }
}