let inputadulto = document.getElementById("adulto")
let inputcrianca = document.getElementById("crianca")
let inputduracao = document.getElementById("duracao")

let resultado = document.getElementById("resultado")
resultado.innerHTML = '<p>' + totaldecarne + 'g de carne</p>';

function calcular(){
    let adulto = inputadulto.value;
    let crianca = inputcrianca.value;
    let duracao = inputduracao.value;
    
    if (duracao == 0) {
        resultado.innerHTML = "<p> Sem tempo, sem festa.</p>";
    } else {
    let totaldecarne = (carnepp(duracao) * adulto + (carnepp(duracao)/2*crianca))/1000;
    let totalbebida = (bebidapp(duracao) * adulto + (bebidapp(duracao)/2*crianca))/1000;
    let totalcerveja = (cervejapp(duracao) * adulto)/1000;


    resultado.innerHTML = '<p>' + totaldecarne + 'kg de carne <br>' + totalbebida + 'l de refrigerante<br>' + totalcerveja + 'l de cerveja</p>';

    function carnepp (duracao) {
        if (duracao >= 6){return 650;}
        else {return 400;}}

    function bebidapp (duracao) {
        if (duracao >= 6){return 1500;}
        else {return 1000;}}    

    function cervejapp (duracao) {
        if (duracao >= 6){return 1800;}
        else {return 1200;}} }}
