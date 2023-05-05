function mostraMedia() {
    let p = Number(document.getElementById("prim").value);
    let s = Number(document.getElementById("seg").value);
    let t = Number(document.getElementById("ter").value);
    let n = document.getElementById("nome").value;

    let m = (p + s + t) / 3;

    document.getElementById("nomeAluno").innerHTML = n;
    document.getElementById("media").innerHTML = m;
    if (m < 9.5) {
        document.getElementById("aprovado").innerHTML = "Reprovado";
    } else {
        document.getElementById("aprovado").innerHTML = "Aprovado";
    }
}