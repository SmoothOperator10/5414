let intervencoes = [];
let marcas = [
    ["VW",["Golf","Polo","Passat"]], 
    ["Audi",["A1","A3","A4"]], 
    ["Renault", ["Clio", "Megane", "Kangoo"]]
];
let proprietarios = [];
let pecas = [];
let veiculos = [];


function registaProprietario(){

    proprietarios.push([
        $('#nifProprietario').val(),
        $('#nomeProprietario').val(),
        $('#moradaProprietario').val()
    ]);
    getProprietarios()
    alert("Proprietário registado!")
    console.log("regista proprietarios")
    console.log(proprietarios)

}

function registaPecas(){
    pecas.push([
        $('#refPecas').val(),
        $('#DescPecas').val()
    ]);
    alert("Peça registada!")
    console.log("regista peças")
    console.log(pecas)
}

function registaMarca(){
    marcas.push([
        $('#nomeMarca').val(),
        []
    ]);
    alert("Marca registada!")
    getMarcas()
    console.log("regista marcas")
    console.log(marcas)
}
function getMarcas(){
    let msg = "<option value='-1'>Selecione uma marca</option>";
        for(let i = 0; i < marcas.length; i++){
            msg += "<option value='"+ i +"'>"+marcas[i][0]+"</option>";
        }
    $('#listaMarcas').html(msg)
    $('#listaMarcas2').html(msg)
}

function registaModelo(marca){
    console.log("marca selecionada")
console.log($('#listaMarcas').val())
for(let i=0; i<marcas.length; i++){
    if(i == $('#listaMarcas').val()){
    marcas[i][1].push(
        $('#nomeModelo').val()
    );
    alert("Modelo registado!")
}}
    console.log("regista modelo")
    console.log(marcas)
}
function getModelos(marca){
    let msg = "<option value='-1'>Selecione um modelo</option>";
        for(let i = 0; i < marcas.length; i++){
            if(marca == i){
                for(let j = 0; j < marcas[i][1].length; j++){
            msg += "<option value='"+ j +"'>"+marcas[i][1][j]+"</option>";
        }}}
        console.log("testa modelo")
        console.log(marca)
    $('#listaModelos').html(msg)
}
function getProprietarios(){
    let msg = "<option value='-1'>Selecione um proprietário</option>";
        for(let i = 0; i < proprietarios.length; i++){
            msg += "<option value='"+ i +"'>"+proprietarios[i][1]+"</option>";
        }
    $('#listaProprietarios').html(msg)
}
function registaVeiculo(){
    veiculos.push([
        $('#listaProprietarios').val(),
        $('#matriculaVeiculo').val(),
        $('#listaMarcas2').val(),
        $('#listaModelos').val()
    ]);
    alert("Veículos registado!")
    getVeiculos()
    console.log("regista veiculo")
    console.log(veiculos)
}
function getVeiculos(){
    let msg = "<option value='-1'>Selecione um Veículo</option>";
        for(let i = 0; i < veiculos.length; i++){
            msg += "<option value='"+ i +"'>"+veiculos[i][1]+"</option>";
        }
    $('#listaVeiculos').html(msg)
    $('#listaVeiculos2').html(msg)
    
}
function getPecas(){
    let msg = "";
    for(let i = 0; i < pecas.length; i++){
        msg += "<tr>";
        msg += "<td>"+pecas[i][1]+"</td>";
        msg += "<td><input type='checkbox' value='"+ i +"' id='pecas"+i+"'>";
        msg += "</tr>";
    }
$('#listaPecas').html(msg)
}
function registaIntervencao(){

    let temp = [];
    for (let i=0; i < pecas.length; i++){

        if($('#pecas'+i).is(':checked')){
            temp.push($('#pecas'+i).val());
        }
    }
    intervencoes.push([
        $('#listaVeiculos').val(),
        temp
    ]);
    alert("Intervenção registada!")
    console.log("regista intervencao")
    console.log(intervencoes)
}
function getIntervencoes(matricula){
        let msg = "";
        for(let i = 0; i < intervencoes.length; i++){
            if(matricula == intervencoes[i][0]){
        
            msg += "<tr>";
            msg += "<td>"+intervencoes[i]+"</td>";
            msg += "<td><button type='button' onclick='infoPecas("+i+")'>Info</button></td>";
            msg += "</tr>";
    
    }
    }
    console.log(msg)
    $('#listagemIntervencoes').html(msg)
}

function infoPecas(m){

        let msg = "";
        msg += "<table>";
        msg += " <thead>";
        msg += "<tr>";
        msg += "<th>Peças</th>";
        msg += "<th>Descroção</th>";
        msg += "</tr>";
        msg += "</thead>";
        msg += "<tbody>";
        for(let i = 0; i < pecas.length; i++){
    
            if(m == pecas[i][0]){
                msg += "<tr>";
                msg += "<td>"+pecas[i][0]+"</td>";
                msg += "<td>"+pecas[i][1]+"</td>";
                msg += "</tr>";
            }
        }
        msg += "</tbody>";
msg += "</table>";
    
        $("#pecasUtilizadas").html(msg);
    }

$(function() {
    getMarcas()
});