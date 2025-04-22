var dadosItens= [];

function adicionarItem(){
    let Item =document.getElementById('Item').value;

    if(Item){
        dadosItens.push(Item);
        console.log(dadosItens);
        criarLista();
        document.getElementById('Item').value = "";
    }else{
        alert("Nenhum item foi adicionado!")
    }
}

function criarLista(){
    let tabela = "<tr><td></td></tr>";
    for(let i = 0;i<=(dadosItens.length-1);i++){
        tabela =+ "<tr><td>" + dadosItens[i] + "</td></tr>"
        document.getElementById('tabela').innerHTML = tabela;
    }
}