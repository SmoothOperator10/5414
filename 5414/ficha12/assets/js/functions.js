let pontos = [];
let turistas = [];
let percursos = [];

function registaPonto() {
  pontos.push([
    $("#nomePonto").val(),
    $("#descricaoPonto").val(),
    $("#latPonto").val(),
    $("#longPonto").val(),
  ]);
  alert("Ponto de Interesse registado");

  console.log(pontos);
}

function registaTurista() {
  if (validaNIF($("#nifTurista").val(), turistas)) {
    turistas.push([
      $("#nomeTurista").val(),
      $("#nifTurista").val(),
      $("#emailTurista").val(),
      $("#telefoneTurista").val(),
    ]);
    alert("Turista registado");
    getTurista()
  } else {
    alert("Turista já registado");
  }
 
  console.log(turistas);
}

function validaNIF(nif, arr) {
  flag = true;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i][1] == nif) {
      flag = false;
    }
  }
  return flag;
}

function getTurista(){
let msg = "<option value='-1'>Escolha o turista</option>";

    for(let i = 0; i < turistas.length; i++){
        msg += "<option value="+ i +">"+ turistas[i][1] + "</option>"
    }
    
 $('#listaTuristas').html(msg)
 $('#listaTuristas2').html(msg)
}

function getPontos(){
    let msg = "";

    for(let i = 0; i < pontos.length; i++){
        msg += "<tr>";
        msg += "<td>"+ pontos[i][0] + "</td>"
        msg += "<td><input type='checkbox' value='"+i+"' id='pontos"+i+"'></td>";
        msg += "<td><input type='text' id='comentarios"+i+"'></td>"
        msg += "</tr>";
    }
    $('#checkPontos').html(msg)

}
function registarPercurso(){

    let pontosTemp = [];

    for(let i = 0; i < pontos.length; i++){
        if($('#pontos'+i).is(':checked')){
            pontosTemp.push([
                $('#pontos'+i).val(),
                $('#comentarios'+i).val()
            ]);
        }
    }

    percursos.push([
        $('#listaTuristas').val(),
        $('#nomePercurso').val(),
        pontosTemp
    ]);

    console.log(percursos);

    alert("Percurso Registado");

}
function listagemTuristas(){
  let msg = "";

    for(let i = 0; i < percursos.length; i++){
        if($('#listaTuristas2').val() == percursos[i][0]){
      msg += "<tr>"
      msg += "<td>"+percursos[i][1]+"</td>"
      msg += "<td><button type='button' onclick='infoPontos("+i+")'>Info</button></td>"
      msg += "</tr>"
    }
    }
    $('#listaPercursosTuristas').html(msg)
}
function infoPontos(ponto){
  let msg = "<table>";
  msg += "<thead>";
  msg += "<tr>";
  msg += "<th>Nome</th>";
  msg += "<th>Descrição</th>";
  msg += "<th>Latitude</th>";
  msg += "<th>Longitude</th>";
  msg += "<th>Comentário</th>";
  msg += "</thead>";
  msg += "</tr>";
  msg += "<tbody>";
  for(let i = 0; i < percursos[ponto][2].length; i++){
    msg += "<tr>"
    msg += "<td>"+pontos[percursos[ponto][2][i][0]][0]+"</td>"
    msg += "<td>"+pontos[percursos[ponto][2][i][0]][1]+"</td>"
    msg += "<td>"+pontos[percursos[ponto][2][i][0]][2]+"</td>"
    msg += "<td>"+pontos[percursos[ponto][2][i][0]][3]+"</td>"
    msg += "<td>"+percursos[ponto][2][i][1]+"</td>"
    msg += "</tr>"


  }
  msg += "</tbody>";
  msg += "</table>";
  $('#listaPontosDetalhe').html(msg)
}