let id = [];
let nome = [];
let descricao = [];
let preco = [];

function registaProduto(){

    id[id.length] = document.getElementById('id').value;
    nome[nome.length] = document.getElementById('nome').value;
    descricao[descricao.length] = document.getElementById('descricao').value;
    preco[preco.length] = document.getElementById('preco').value;

    alert("Produto Registado");
}


function mostrarProduto(){

    let msg ="";

    for(let i = 0; i < id.length; i++){
        msg += '<tr>';
        msg += '<td>'+id[i]+'</td>';
        msg += '<td>'+nome[i]+'</td>';
        msg += '<td>'+descricao[i]+'</td>';
        msg += '<td>'+preco[i]+'</td>';
        msg += '<td>'+preco[i]*1.23+'</td>';
        msg += '</tr>';
    }

    document.getElementById('listagemProdutos').innerHTML = msg;

}