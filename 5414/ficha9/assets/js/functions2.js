let local = [];
let bandas = [];
let tipo = ['Pop','Rock','Clássica']
let evento = [];

function registaLocal(){

    local.push([
        $("#nRegisto").val(),
        $("#localRegisto").val(),
        $("#latRegisto").val(),
        $("#longRegisto").val(),
        $("#horarioRegisto").val(),
        $("#tipoLocal").val()
    ])

    alert("Local Registada");
    listaLocais()
    nRegisto()
    console.log(local)

}

function registaBanda(){

    if(validaDados($('#nBanda').val(), bandas, 1)){

    bandas.push([
        $("#nomeBanda").val(),
        $("#nBanda").val(),
        $("#tipoBanda").val()
    ])

    alert("Banda Registada");
    listaBandas()
    nRegisto()
    console.log(bandas)
    }
    else{
        alert("Banda já existe.");
    }
}

function validaDados(n, arr, posicao){

    let flag = true;
    for(let i=0; i < arr.length; i++){
    if (n == arr[i][posicao]){

        flag = false;
        break
    }
    }

    return flag
}
function listaTipo(){

    let msg = "<option value='-1'>Escolha um tipo</option>"

    for (let i=0; i < tipo.length; i++){
        msg += "<option value="+ i + ">"+ tipo[i] +"</option>"
    }
    $("#tipoLocal").html(msg)
    $("#tipoBanda").html(msg)
}


function listaLocais(){

    let msg = "<option value='-1'>Escolha um local</option>"

    for (let i=0; i < local.length; i++){
        msg += "<option value="+ i + ">"+ local[i][0] +"</option>"
    }
    $("#nRegisto2").html(msg)
    $("#nRegisto3").html(msg)
}
function listaBandas(){

    let msg = "<option value='-1'>Escolha uma banda</option>"

    for (let i=0; i < bandas.length; i++){
        msg += "<option value="+ i + ">"+ bandas[i][1] +"</option>"
    }
    $("#codBand").html(msg)
}

function listaLocalEvento(posicao){


    $('#localRegistoEv').val(local[posicao][1]);
    $('#tipoEv').val(tipo[local[posicao][5]]);
}

function listaBandasEvento(posicao){

    $('#nomeBandaEv').val(bandas[posicao][0]);
    $('#tipoBandaEv').val(tipo[bandas[posicao][2]]); 
    console.log(bandas)
    console.log(bandas[posicao][2])
}

function registaEvento(){

    if(validaEvento()){

        evento_bandas.push([
        $("#nRegisto2").val(),
        $("#localRegistoEv").val(),
        $("#tipoEv").val(),
        $("#codBand").val(),
        $("#nomeBandaEv").val(),
        $("#tipoBandaEv").val()
    ])

    alert("Evento Registado");
    listaBandas()
    console.log(evento_bandas);
    }
    else{
        alert("O evento e a banda tem tipos diferentes.");
    }
}

function validaEvento(){
    
    let flag = false
    if ($("#tipoEv").val() == $("#tipoBandaEv").val()){
        flag = true
    }
return flag;
}

function registaEventoPublico(){

        evento_publico.push([
        $("#nRegisto2").val(),
        $("#localRegistoEv").val(),
        $("#tipoEv").val(),
        $("#codBand").val(),
        $("#nomeBandaEv").val(),
        $("#tipoBandaEv").val()
    ])

    alert("Evento Registado");


}

function nRegisto() {
    $('#nRegisto').val(local.length);
    $('#nBanda').val(bandas.length);

};
