let clientes = [];
let produtos = [];
let orcamentos = [];

function registaCliente() {

    if (!validaNIF($("#nifCliente").val())) {

        clientes.push([
            $('#nomeCliente').val(),
            $('#emailCliente').val(),
            $('#nifCliente').val(),
            $('#moradaCliente').val()
        ]);
        console.log(clientes.length)

        listaClientes()

        alert("Cliente registado!");
    }
    else {
        alert("Cliente já existe em sistema!");
    }
}

function validaNIF(nif) {

    let flag = false;

    for (let i = 0; i < clientes.length; i++) {
        if (nif == clientes[i][2]) {
            flag = true
            break;
        }
    }

    return flag;
}

function registaProduto() {

    if (!validaReferencia($("#refProduto").val())) {

        produtos.push([
            $('#nomeProduto').val(),
            $('#refProduto').val(),
            $('#precoProduto').val()
        ]);
        console.log(produtos.length)

        alert("Produto registado!");
        listaProdutos()

    }
    else {
        alert("Produto já existe em sistema!");
    }

}

function validaReferencia(referencia) {

    let flag = false;

    for (let i = 0; i < produtos.length; i++) {
        if (referencia == produtos[i][1]) {
            flag = true

        }
    }

    return flag;
}


function listaClientes() {
    let msg = "<option value='-1'>Selecione o cliente</option>";

    for (let i = 0; i < clientes.length; i++) {

        msg += "<option value='" + i + "'>" + clientes[i][2] + "</option>";
    }

    $("#listagemClientes").html(msg);
    $("#filtroCliente").html(msg);
    $("#editaCliente").html(msg);


}

function listaProdutos() {
    let msg = "<option value='-1'>Selecione o produto</option>";

    for (let i = 0; i < produtos.length; i++) {

        msg += "<option value='" + i + "'>" + produtos[i][1] + "</option>";
    }
    $("#listagemProdutos").html(msg);
    $("#editaProduto").html(msg);
}

function gerarOrcamento() {

    orcamentos.push([
        orcamentos.length,
        clientes[$('#listagemClientes').val()][2],
        clientes[$('#listagemClientes').val()][0],
        produtos[$('#listagemProdutos').val()][1],
        produtos[$('#listagemProdutos').val()][0],
        $('#quantidadeProduto').val(),
        produtos[$('#listagemProdutos').val()][2],
        ((produtos[$('#listagemProdutos').val()][2]) * ($('#quantidadeProduto').val())) * 1.23
    ])
    console.log(orcamentos.length)
    nOrcamento()
    alert("Orçamento registado!");

}

function nOrcamento() {
    let msg = "Orçamento nº: " + orcamentos.length + ".";

    $("#ordemOrcamento").html(msg);
}

function listagemOrcamentos() {

    let msg = "";

    for (let i = 0; i < orcamentos.length; i++) {
        msg += "<tr>"
        msg += "<td>" + orcamentos[i][0] + "</td>"
        msg += "<td>" + orcamentos[i][1] + "</td>"
        msg += "<td>" + orcamentos[i][2] + "</td>"
        msg += "<td>" + orcamentos[i][3] + "</td>"
        msg += "<td>" + orcamentos[i][4] + "</td>"
        msg += "<td>" + orcamentos[i][5] + "</td>"
        msg += "<td>" + orcamentos[i][6] + "</td>"
        msg += "<td>" + orcamentos[i][7] + "</td>"
        msg += "</tr>"


    }
    $("#tableOrcamentos").html(msg);

}



function listarFiltroPorCliente() {

    let msg = "";
    /*  console.log(clientes[$("#filtroCliente").val()][2])
      console.log(orcamentos[0][1])
      console.log(orcamentos[1][1])
      console.log(orcamentos[2][1])
      console.log(orcamentos[3][1])
  */

    for (let i = 0; i < orcamentos.length; i++) {

        if (orcamentos[i][1] == clientes[$("#filtroCliente").val()][2]) {

            msg += "<tr>";
            msg += "<td>" + orcamentos[i][0] + "</td>";
            msg += "<td>" + orcamentos[i][1] + "</td>";
            msg += "<td>" + orcamentos[i][2] + "</td>";
            msg += "<td>" + orcamentos[i][3] + "</td>";
            msg += "<td>" + orcamentos[i][4] + "</td>";
            msg += "<td>" + orcamentos[i][5] + "</td>";
            msg += "<td>" + orcamentos[i][6] + "</td>";
            msg += "<td>" + orcamentos[i][7] + "</td>";
            msg += "</tr>";
        }
    }
    $("#tableFiltradaOrcamentos").html(msg);

}

function getDadosCliente(cliente) {

    cliente = Number(cliente);

    $('#nomeClienteEdit').val(clientes[cliente][0]);
    $('#emailClienteEdit').val(clientes[cliente][1]);
    $('#nifClienteEdit').val(clientes[cliente][2]);
    $('#moradaClienteEdit').val(clientes[cliente][3]);

}

function editarCliente() {

    let cliente = Number(clientes[$("#editaCliente").val()][2]);
    //console.log(orcamentos[0][1])

    clientes[$("#editaCliente").val()][0] = $('#nomeClienteEdit').val();
    clientes[$("#editaCliente").val()][1] = $('#emailClienteEdit').val();
    clientes[$("#editaCliente").val()][2] = $('#nifClienteEdit').val();
    clientes[$("#editaCliente").val()][3] = $('#moradaClienteEdit').val();

    for (let i = 0; i < orcamentos.length; i++) {
        if (orcamentos[i][1] == cliente) {
            orcamentos[i][1] = $('#nifClienteEdit').val();
            orcamentos[i][2] = $('#nomeClienteEdit').val();


        }
    }
    alert("Cliente alterado!");
    console.log([$("#editaCliente").val()][0]);
    listaClientes()
}

function getDadosProduto(produto) {

    produto = Number(produto);

    $('#nomeProdutoEdit').val(produtos[produto][0]);
    $('#refProdutoEdit').val(produtos[produto][1]);
    $('#precoProdutoEdit').val(produtos[produto][2]);

}

function editarProduto() {

    let produto = Number(produtos[$("#editaProduto").val()][1]);
    //console.log(orcamentos[0][1])
    produtos[$("#editaProduto").val()][0] = $('#nomeProdutoEdit').val();
    produtos[$("#editaProduto").val()][1] = $('#refProdutoEdit').val();
    produtos[$("#editaProduto").val()][2] = $('#precoProdutoEdit').val();

    for (let i = 0; i < orcamentos.length; i++) {
        if (orcamentos[i][3] == produto) {
            orcamentos[i][3] = $('#refProdutoEdit').val();
            orcamentos[i][4] = $('#nomeProdutoEdit').val();
            orcamentos[i][6] = $('#precoProdutoEdit').val();
            orcamentos[i][7] = (($('#precoProdutoEdit').val() * orcamentos[i][5]) * 1.23);


        }
    }
    alert("Produto alterado!");
    console.log([$("#editaProduto").val()][0]);
    listaProdutos()
}