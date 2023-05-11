let equipas = [];

function registarEquipa(){

    if (equipas.length<15){

    equipas[equipas.length] = document.getElementById("nomeEquipa").value;
    equipas[equipas.length] = document.getElementById("vitoriasEquipa").value;
    equipas[equipas.length] = document.getElementById("derrotasEquipa").value;

    alert("Equipa Registada!")
    }
    else{
        alert("Só é possível registar 5 equipas!")  
    }
    getEquipas()

}

function listarEquipa(){

    msg = "";
    for (let i=0; i<(equipas.length); i += 3){
 
    msg += "<tr>";
    msg += "<td>" + equipas[i] + "</td>";
    msg += "<td>" + equipas[i+1] + "</td>";
    msg += "<td>" + equipas[i+2] + "</td>";
    msg += "<td>" + (Number(equipas[i+1]))/(Number(equipas[i+1])+Number(equipas[i+2])) + "</td>";
    msg += "</tr>";
}

        document.getElementById("tabelaEquipas").innerHTML = msg;

}

function getEquipas(){

    msg = "<option value='-1'>Selecione a equipa a alterar</option>";

    for (let i=0; i< (equipas.length); i += 3){

        msg += "<option value="+ i +">"+ equipas[i] +"</option>";
    }

    document.getElementById("alterarEquipa").innerHTML = msg;
}

function getInfoEquipas(posicao){
    posicao = Number(posicao);

    document.getElementById("nomeEquipaAlt").value = equipas[posicao]
    document.getElementById("vitoriasEquipaAlt").value = equipas[posicao+1]
    document.getElementById("derrotasEquipaAlt").value = equipas[posicao+2]

}

function guardarEquipa(){

    let posicao = Number(document.getElementById('alterarEquipa').value);

    equipas[posicao] = document.getElementById("nomeEquipaAlt").value;
    equipas[posicao+1] = document.getElementById("vitoriasEquipaAlt").value;
    equipas[posicao+2] = document.getElementById("derrotasEquipaAlt").value;

    alert("Equipa Alterada!")
    getEquipas()
}