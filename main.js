var dadosItens= [];

function adiItem(){
    let adiItem =document.getElementById('Item').value;
}

function criarLista(){
    let tabela = "<tr><th></th></tr>";
    for(let i = 0;i<=(dadosItens.length-1);i++){
        tabela =+ "<tr><th>Alimentação</th></tr>";
        document.getElementById('tabela').innerHTML = tabela;
    }
}