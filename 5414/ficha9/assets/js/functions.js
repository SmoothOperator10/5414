let evento = [];
let bandas = [];
let publico = [];
let tipo = ['Pop', 'Rock', 'Clássica'];

function listaTipo() {

    let msg = "<option value='-1'>Escolha um tipo</option>"

    for (let i = 0; i < tipo.length; i++) {
        msg += "<option value=" + i + ">" + tipo[i] + "</option>"
    }
    $("#tipoEvento").html(msg)
    $("#tipoBanda").html(msg)
}

function registaEvento() {

    evento.push([
        evento.length,
        $("#localEvento").val(),
        $("#latEvento").val(),
        $("#longEvento").val(),
        $("#horarioEvento").val(),
        $("#tipoEvento").val(),
        [],
        []
    ])
    listaEventos()
    nRegisto()
    console.log(evento)
    alert("Evento Registado!")
}

function registaBanda() {
    bandas.push([
        $("#nomeBanda").val(),
        $("#nBanda").val(),
        $("#tipoBanda").val()
    ])
    listaBandas()
    nRegisto()
    console.log(bandas)
    alert("Banda Registada!")
}
function nRegisto() {
    $('#nEvento').val(evento.length);
    $('#nBanda').val(bandas.length);

};

function listaEventos() {

    let msg = "<option value='-1'>Escolha um local</option>"

    for (let i = 0; i < evento.length; i++) {
        msg += "<option value=" + i + ">" + evento[i][0] + "</option>"
    }
    $("#nRegisto2").html(msg)
    $("#nRegisto3").html(msg)
    $("#listaBandas").html(msg) 
    $("#listaPublico").html(msg) 
}
function listaBandas() {

    let msg = "<option value='-1'>Escolha uma banda</option>"

    for (let i = 0; i < bandas.length; i++) {
        msg += "<option value=" + i + ">" + bandas[i][1] + "</option>"
    }
    $("#codBand").html(msg)
 
}

function listaRegistarEvento(posicao) {
    $('#localRegistoEv').val(evento[posicao][1]);
    $('#tipoEv').val(tipo[evento[posicao][5]]);
}

function listaBandasEvento(posicao) {
    $('#nomeBandaEv').val(bandas[posicao][0]);
    $('#tipoBandaEv').val(tipo[bandas[posicao][2]]);
}
function registaEventoBanda() {

    if(validaEvento()){
        evento[$('#nRegisto2').val()][6].push(
            bandas[$('#codBand').val()]);

    alert("Banda registada no Evento!")
    }else{
        alert("O género tem que ser igual!")
    }
    console.log(bandas[$('#codBand').val()])
    console.log(evento[$('#nRegisto2').val()])
    console.log(evento)

}

function validaEvento() {

    let flag = false
    if ($("#tipoEv").val() == $("#tipoBandaEv").val()) {
        flag = true
    }
    return flag;
}

function registaPublico(posicao){
    $('#localRegistoEvPub').val(evento[posicao][1]);
}

function registaEventoPublico(){
    evento[$('#nRegisto3').val()][7].push([
        $('#nomePub').val(),
        $('#nifPub').val(),
        $('#telPub').val(),
        $('#emailPub').val()   
    
    ])
console.log(evento)
alert("Público registado!")
    
}

function filtrarBandas(eventos){

    let msg ="";
    for(let i = 0; i < evento.length; i++){

        for (let j=0; j < evento[i][6].length; j++){

        if(eventos == evento[i][0]){
            msg += "<tr>";
            msg += "<td>"+evento[i][0]+"</td>";
            msg += "<td>"+evento[i][1]+"</td>";
            msg += "<td>"+evento[i][6][j][0]+"</td>";
            msg += "<td>"+evento[i][6][j][1]+"</td>";
            msg += "<td>"+tipo[evento[i][6][j][2]]+"</td>";
            msg += "</tr>";
        }
    }
    }

    $('#listaBandasNoEvento').html(msg);
}

function filtrarPublico(eventos){

    let msg ="";
    for(let i = 0; i < evento.length; i++){

        for (let j=0; j < evento[i][7].length; j++){

        if(eventos == evento[i][0]){
            msg += "<tr>";
            msg += "<td>"+evento[i][0]+"</td>";
            msg += "<td>"+evento[i][1]+"</td>";
            msg += "<td>"+evento[i][7][j][0]+"</td>";
            msg += "<td>"+evento[i][7][j][1]+"</td>";
            msg += "<td><button type='button' onclick='mostraPessoa(" +evento[i][7][j][1]+ ")'>Mostra dados Completos</button></td>";
            msg += "</tr>";

        }
    }
    }
    $('#listaPublicoNoEvento').html(msg);
}

function mostraPessoa(nif){

    let msg="";
    for(let i = 0; i < evento.length; i++){

        for (let j=0; j < evento[i][7].length; j++){
            if(nif == evento[i][7][j][1]){
                msg += "<table>";
                msg += " <thead>";
                msg += "<tr>";
                msg += "<th>Nome</th>";
                msg += "<th>NIF</th>";
                msg += " <th>Telefone</th>";
                msg += "<th>Email</th>";
                msg += "</tr>";
                msg += "</thead>";
                msg += "<tbody>";
                msg += "<tr>";
                msg += "<td>"+evento[i][7][j][0]+"</td>";
                msg += "<td>"+evento[i][7][j][1]+"</td>";
                msg += "<td>"+evento[i][7][j][2]+"</td>";
                msg += "<td>"+evento[i][7][j][3]+"</td>";
                msg += "</tr>";
                msg += "</tbody>";
                msg += "</table>";
                break
    }
break
}
break
}
    $('#infoPessoa').html(msg);
}