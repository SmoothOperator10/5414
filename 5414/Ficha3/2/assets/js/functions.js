function mostraMedia(){
    let p = Number(document.getElementById("prim").value);
    let s = Number(document.getElementById("seg").value);
    let t = Number(document.getElementById("ter").value);
    let q = Number(document.getElementById("quar").value);
    let qu = Number(document.getElementById("quin").value);

    let m = (p+s+t+q+qu)/5;

    document.getElementById("media").innerHTML = m;
}