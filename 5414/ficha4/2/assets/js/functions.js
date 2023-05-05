function mostraVel(){
    let k = Number(document.getElementById("km").value);
    let h = Number(document.getElementById("horas").value);

    let vm = k/h;

    document.getElementById("velMedia").innerHTML = vm;
    if (vm <= 90) {
        document.getElementById("mensagem").innerHTML = "Velocidade Correcta";
    } else if (vm > 90 && vm <=120) {
        document.getElementById("mensagem").innerHTML = "velocidade Excessiva";
    }else{
        document.getElementById("mensagem").innerHTML = "velocidade muito excessiva";
    }
}