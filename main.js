var dadosCategoria = [];

function adicionarCategoria(){
    let Categoria = document.getElementById('Categoria').value;

    if(Categoria){
        dadosCategoria.push(Categoria);
        criarCategoria();
        document.getElementById('Categoria').value = "";
    }else{
        alert("Nenhuma categoria foi adicionada");
    }
}

function criarCategoria(){
    let tabela = "";
    for(let i = 0; i < dadosCategoria.length; i++){
        tabela += "<tr><td>" + dadosCategoria[i] + "</td></tr>";
    }
    document.getElementById('tabela').getElementsByTagName('tbody')[0].innerHTML = tabela;
}

var dadosItem = [];

function adicionarItem(){
    let Item = document.getElementById('Item').value;
    let Preco = parseFloat(document.getElementById('Preco').value);

    if(Item && !isNaN(Preco)){
        dadosItem.push({ nome: Item, valor: Preco });
        criarItem();
        atualizarTotal(); 
        document.getElementById('Item').value = "";
        document.getElementById('Preco').value = "";
    }else{
        alert("Adicione o nome do item e o preço!");
    }
}

