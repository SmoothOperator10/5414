let participantes = [];

function registarParticipantes(){
if(validaIdade($("#idadeParticipante").val())){
if(validaInscricao()){

  participantes.push($("#nifParticipante").val());
  participantes.push($("#nomeParticipante").val());
  participantes.push($("#moradaParticipante").val());
  participantes.push($("#idadeParticipante").val());
  participantes.push($("#telefoneParticipante").val());
  participantes.push($("#cursoParticipante").val());

  console.log(participantes)
  $("#listagemParticipantes").css("display", "none")
  $("#listagemParticipantesCursos").css("display", "none")
  alert("Participante Registado.")
}else{
    alert("Atingido o número máximo de participantes.")
}
}else{
    alert("Os participantes tem de ter mais de 16 anos.")
}
}

function listarParticipantes(){

    let msg="";

    for(let i = 0; i< participantes.length; i += 6){

        msg += "<tr>";
        msg += "<td>"+participantes[i]+"</td>";
        msg += "<td>"+participantes[i+1]+"</td>";
        msg += "<td>"+participantes[i+2]+"</td>";
        msg += "<td>"+participantes[i+3]+"</td>";
        msg += "<td>"+participantes[i+4]+"</td>";
        msg += "<td>"+participantes[i+5]+"</td>";
        msg += "</tr>";
    }

    $("#tabelaParticipantes").html(msg);
    $("#listagemParticipantes").css("display", "block")
}

function validaInscricao(){

    let flag = true;

    if (participantes.length >= 90){
    flag = false;
    }

    return flag;
}

function validaIdade(idade){

    let flag = true;

    if (idade < 16){
        flag = false;
    }
return flag;

}

function listarCurso(){

    let msg="";

    for (let i=0; i< participantes.length; i += 6){
        if (participantes[i+5] == $("#selecaoCurso").val()){

        msg += "<tr>";
        msg += "<td>"+participantes[i]+"</td>";
        msg += "<td>"+participantes[i+1]+"</td>";
        msg += "<td>"+participantes[i+2]+"</td>";
        msg += "<td>"+participantes[i+3]+"</td>";
        msg += "<td>"+participantes[i+4]+"</td>";
        msg += "<td>"+participantes[i+5]+"</td>";
        msg += "</tr>";
    }

    $("#tabelaParticipantesCursos").html(msg);
    $("#listagemParticipantesCursos").css("display", "block")
}
}