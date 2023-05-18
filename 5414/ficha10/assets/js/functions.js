let areas =[];
let especies = [];
let animais = [];
let visitantes = [];
let visitasArea = [];

function registaArea(){

    areas.push([
        $('#refArea').val(),
        $('#descricaoArea').val()
    ])

    alert("Área registada!");
    listaAreas()
//console.log(areas)
}

function registaEspecie(){

    especies.push(
        $('#descricaoEspecie').val()
    )
    alert("Especie registada!");
    listaEspecies()
//console.log(especies)
}

function listaAreas(){

    let msg = "<option value='-1'>Escolha a Área</option>"

    for(let i=0; i < areas.length; i++){

        msg += "<option value="+i+">"+areas[i][1]+"</option>"

    }
    $('#areaAnimal').html(msg);
   // console.log(areas[0]);
}
function listaEspecies(){

    let msg = "<option value='-1'>Escolha a Especie</option>"

    for(let i=0; i < especies.length; i++){

        msg += "<option value="+i+">"+especies[i]+"</option>"

    }
    $('#especieAnimal').html(msg);
  //  console.log(especies[0]);
}

function registaAnimal(){

    animais.push([
$('#areaAnimal').val(),
$('#nomeAnimal').val(),
$('#chipAnimal').val(),
$('#dataAnimal').val(),
$('#especieAnimal').val()

    ]);
    alert("Animal registado!");
//console.log(animais)
}

function registaVisitante(){

    if(validaCC($('#ccVisitante').val())){

    visitantes.push([
        $('#nomeVisitante').val(),
        $('#emailVisitante').val(),
        $('#ccVisitante').val()
    ])
    alert("Visitante registado!");
    listaVisitantes()
    }
else{
    alert("Visitante já estava registado!");
}
   // console.log(visitantes)
}
function validaCC(cc){

    let flag = true;
    for(let i=0; i < visitantes.length; i++){
    if(cc == visitantes[i][2]){
        flag = false;
    }
}
return flag;
}
function listaVisitantes(){

    let msg = "<option value='-1'>Escolha o Visitante</option>"

    for(let i=0; i < visitantes.length; i++){

        msg += "<option value="+i+">"+visitantes[i][0]+"</option>"

    }
    $('#nomeVisitanteArea').html(msg);
    $('#nomeListagemVisitanteArea').html(msg);
   // console.log(visitantes);
}

function getAreas(){
    let msg ="";

    for(let i = 0; i < areas.length; i++){

       msg += "<tr>";
       msg += "<td>"+areas[i][1]+"</td>";
       msg += "<td><input type='checkbox' id='areas"+i+"' value='"+i+"'></td>";
       msg += "</tr>";
    }

    $('#listaVisitanteArea').html(msg);
}
function registaVisitanteArea(){

    let temp = [];

    for(let i = 0; i < areas.length; i++){

        if($('#areas'+i).is(':checked')){
            temp.push($('#areas'+i).val());
        }
    }

    visitasArea.push([
        $('#nomeVisitanteArea').val(),
        temp    
    ]);
    alert("Registado com sucesso!");

    console.log(visitasArea);

}

function getVisitante(n){

    let msg ="";
    for(let i = 0; i < visitasArea.length; i++){

        for (let j=0; j < visitasArea[i][1].length; j++){
        if(n == visitasArea[i][0]){
            msg += "<tr>";
            msg += "<td>"+areas[visitasArea[i][1][j]][1]+"</td>";
            msg += "<td><button type='button' onclick='mostraAnimais(" +visitasArea[i][1][j]+ ")'>Mostra os Animais da Área</button></td>";
            msg += "</tr>";

        }
       // console.log(visitasArea[i][1][j])
    }
}
    $('#listagemVisitanteArea').html(msg);
}
function mostraAnimais(area){

    let msg="";
    msg += "<table>";
    msg += " <thead>";
    msg += "<tr>";
    msg += "<th>Área</th>";
    msg += "<th>Nome</th>";
    msg += "<th>Número do Chip</th>";
    msg += "<th>Data de Nascimento</th>";
    msg += "<th>Especie</th>";
    msg += "</tr>";
    msg += "</thead>";
    msg += "<tbody>";
        for (let i=0; i < animais.length; i++){
            if(area == animais[i][0]){
                msg += "<tr>";
                msg += "<td>"+areas[animais[i][0]][1]+"</td>";
                msg += "<td>"+animais[i][1]+"</td>";
                msg += "<td>"+animais[i][2]+"</td>";
                msg += "<td>"+animais[i][3]+"</td>";
                msg += "<td>"+especies[animais[i][4]][0]+"</td>";
                msg += "</tr>";
                console.log(animais[i][0])
    }
}
msg += "</tbody>";
msg += "</table>";
    $('#infoAnimais').html(msg);
}
