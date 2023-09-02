// referências aos botões "Ligar" e "Desligar"
const turnOn = document.getElementById( 'turnOn');
const turnOff = document.getElementById( 'turnOff');
//referência à imagem da lâmpada no HTML.
const lamp = document.getElementById( 'lamp');
//verifica se a lâmpada está quebrada verificando se o atributo src da imagem contém a string "LampadaQuebrada"
function isLampBroken(){
    return lamp.src.indexOf ('LampadaQuebrada')> -1
}
//funcao lig
function lampOn (){
    if (!isLampBroken()){
    lamp.src ="./img/lampadaLigada.jpg";
}}
//funcao desl
function lampOff (){
    if (!isLampBroken()){
    lamp.src ="./img/lampadaDesligada.jpg";
}}
// funcao queb
function lampBroken (){
    lamp.src ="./img/lampadaQuebrada.jpg";
}
turnOn.addEventListener( 'click', lampOn);
turnOff.addEventListener( 'click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick',lampBroken);