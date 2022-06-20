window.onload=function(){
    
    let ilgioIvedimoLaukelis = document.getElementById("ilgis");
    console.log(ilgioIvedimoLaukelis);

    let plocioIvedimoLaukelis = document.getElementById("plotis");

    let mygtukas = document.getElementById("skaiciavimoMygtukas");
    console.log(mygtukas);

    let pastraipa = document.getElementById("rezultatoPastraipa");

    mygtukas.onclick = function() {
        let ilgis = ilgioIvedimoLaukelis.valueAsNumber;
        console.log(ilgis);

        let plotis = plocioIvedimoLaukelis.valueAsNumber;
        console.log(plotis);

        console.log(perimetras(ilgis, plotis));

        pastraipa.innerHTML = "Perimetras yra: " + perimetras(ilgis, plotis);
    }
}


function perimetras(a, b) {
    return 2*a + 2*b;
}