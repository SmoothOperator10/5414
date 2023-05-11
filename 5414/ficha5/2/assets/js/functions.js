let marca = [];
let modelo = [];
let matricula = [];
let consumo = [];
let kms = [];

function registaVeiculo(){

    marca[marca.length] = document.getElementById('marca').value;
    modelo[modelo.length] = document.getElementById('modelo').value;
    matricula[matricula.length] = document.getElementById('matricula').value;
    consumo[consumo.length] = document.getElementById('consumo').value;
    kms[kms.length] = document.getElementById('kms').value;

    alert("Veículo Registado");
}


function mostrarVeiculo(){

    let msg ="";

    let totalkms = 0;
    let totalcons = 0;

    for(let i = 0; i < marca.length; i++){
        msg += '<tr>';
        msg += '<td>'+marca[i]+'</td>';
        msg += '<td>'+modelo[i]+'</td>';
        msg += '<td>'+matricula[i]+'</td>';
        msg += '<td>'+consumo[i]+'</td>';
        msg += '<td>'+kms[i]+'</td>';
        msg += '</tr>';

        totalkms += Number(kms[i]);
        totalcons += Number(consumo[i]);
    }

    let consmedio = totalcons / totalkms;

    document.getElementById('listagemVeiculos').innerHTML = msg;
    document.getElementById('totalKms').innerHTML = totalkms+" kms";
    document.getElementById('consmedio').innerHTML = consmedio+" Lts/km";

}