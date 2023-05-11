let equipa = [];



function registaEquipa() {
    if (equipa.length < 15){

    equipa[equipa.length] = document.getElementById('nomeEquipa').value;
    equipa[equipa.length] = document.getElementById('vitoriasEquipa').value;
    equipa[equipa.length] = document.getElementById('derrotasEquipa').value;

    console.log(equipa);

    alert("Equipa registada com sucesso!");

    getEquipas();

}else{
    alert("Só pode registar 5 equipas!");
}
}
function mostrarEquipa() {

    let msg = "";

    for (let i = 0; i < equipa.length; i += 3) {

        let mediavitorias = (Number(equipa[i + 1]) / (Number(equipa[i + 2]) + Number(equipa[i + 1]))) * 100;

        msg += "<tr>";
        msg += "<td>" + equipa[i] + "</td>";
        msg += "<td>" + equipa[i + 1] + "</td>";
        msg += "<td>" + equipa[i + 2] + "</td>";
        msg += "<td>" + mediavitorias + " %</td>";
        msg += "</tr>";
    }

    document.getElementById('listagemEquipas').innerHTML = msg;
}

function getEquipas(){

    let msg = "<option value='-1'>Escolha uma opção</option>"
    
    for(let i = 0; i < equipa.length; i+=3){
        msg += "<option value='"+i+"'>"+equipa[i]+"</option>"
    }

    document.getElementById('listaEquipas').innerHTML = msg;
}

function getInfoEquipas(posicao){
    posicao = Number(posicao);

    document.getElementById('nomeEquipaEdit').value = equipa[posicao]
    document.getElementById('vitoriasEquipaEdit').value = equipa[posicao+1]
    document.getElementById('derrotasEquipaEdit').value = equipa[posicao+2]


}

function editEquipa(){

    let posicao = Number(document.getElementById('listaEquipas').value);

    equipa[posicao] = document.getElementById('nomeEquipaEdit').value;
    equipa[posicao+1] = document.getElementById('vitoriasEquipaEdit').value;
    equipa[posicao+2] = document.getElementById('derrotasEquipaEdit').value;

    getEquipas();

    console.log(equipa)

    alert("Alterado com sucesso!");
}