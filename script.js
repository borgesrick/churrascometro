let inputadulto = document.getElementById("adulto")
let inputcrianca = document.getElementById("crianca")
let inputduracao = document.getElementById("duracao")

let resultado = document.getElementById("resultado")
resultado.innerHTML = '<p>' + totaldecarne + 'g de carne</p>';

function calcular(){
    let adulto = inputadulto.value;
    let crianca = inputcrianca.value;
    let duracao = inputduracao.value;
    
    let totaldecarne = carnepp(duracao) * adulto + (carnepp(duracao)/2*crianca);
    let totalbebida = bebidapp(duracao) * adulto + (bebidapp(duracao)/2*crianca);
    let totalcerveja = cervejapp(duracao) * adulto;


    resultado.innerHTML = '<p>' + totaldecarne + 'g de carne <br>' + totalbebida + 'ml de refrigerante<br>' + totalcerveja + 'ml de cerveja</p>';

    function carnepp (duracao) {
        if (duracao >= 6){return 650;}
        else {return 400;}}

    function bebidapp (duracao) {
        if (duracao >= 6){return 1500;}
        else {return 1000;}}    

    function cervejapp (duracao) {
        if (duracao >= 6){return 1800;}
        else {return 1200;}} 

    
        

}

