var dadosCategoria = [];

function adicionarCategoria(){
    let Categoria = document.getElementById('Categoria').value;

    if(Categoria){
        dadosCategoria.push(Categoria);
        console.log(dadosCategoria);
        criarCategoria();
        document.getElementById('Categoria').value = "";
    }else{
        alert("Nenhuma categoria foi adicionada")
    }
}


function criarCategoria(){
    let tabela = "<tr><td>Nome</td><td>Ações</td></tr>";
    for(let i =0;i<=(dadosCategoria.length-1); i++){
        tabela += "<tr><td>" + dadosCategoria[i] + "</td></tr>";
        document.getElementById('tabela').innerHTML = tabela;
    }
}

var dadosItens= [];

function adicionarItem(){
    let Item =document.getElementById('Item').value;

    if(Item){
        dadosItens.push(Item);
        console.log(dadosItens);
        criarLista();
        document.getElementById('Item').value="";
    }else{
        alert("Nenhum item foi adicionado!")
    }
}


function criarLista(){
    for(let i = 0;i<=(dadosItens.length-1);i++){
        tabela =+ "<tr><th>" + dadosItens+ "</th><th></th></tr>";
        document.getElementById('tabela').innerHTML = tabela;
    }
}