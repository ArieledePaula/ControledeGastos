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
    let tabela = "<tr><td></td></tr>";
    for(let i =0;i<=(dadosCategoria.length-1); i++){
        tabela += "<tr><td>" + dadosCategoria[i] +  "</td></tr>";
        document.getElementById('tabela').innerHTML = tabela;
    }
}

var dadosItem = [];

function adicionarItem(){
    let Item = document.getElementById('Item').value;

    if(Item){
        dadosItem.push(Item);
        console.log(dadosItem);
        criarItem();
        document.getElementById('Item').value = "";
    }else{
        alert("Nenhum Item foi adicionado!")
    }
}


function criarItem(){
    let tabela1 = "<tr><td></td></tr>";
    for(let i =0;i<=(dadosItem.length-1); i++){
        tabela1 += "<tr><td>" + dadosItem[i] +  "</td></tr>";
        document.getElementById('tabela1').innerHTML = tabela1;
    }
}


