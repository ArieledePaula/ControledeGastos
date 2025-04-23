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
function criarItem(){
    let tabela1 = "";
    for(let i = 0; i < dadosItem.length; i++){
        tabela1 += "<tr><td>" + dadosItem[i].nome + "</td><td>" + dadosItem[i].valor + "</td></tr>";
    }
    document.getElementById('tabela1').getElementsByTagName('tbody')[0].innerHTML = tabela1;
}

function atualizarTotal(){
    let total = 0;
    for(let i = 0; i < dadosItem.length; i++){
        total += dadosItem[i].valor;
    }


    let totalElement = document.getElementById('total-gastos');
    if(!totalElement){
        totalElement = document.createElement('div');
        totalElement.id = 'total-gastos';
        totalElement.style.marginTop = '20px';
        document.querySelector('.container').appendChild(totalElement);
    }

    totalElement.textContent = "Total de Gastos: " + total;
}

atualizarTotal();

