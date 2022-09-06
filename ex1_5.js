var button = document.querySelector("button");
button.onclick = function(){

const jantar = Number(prompt("Valor do jantar R$"))
const garcom = jantar * 0.10
const total = jantar + garcom
alert("Valor Total:"+total);

}