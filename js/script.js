const age = prompt('quanti anni hai?')
const km = prompt('quanti km vuoi percorrere?') 

let price = km * 0.21;

if(age < 18) {
  price -= (price / 100 * 20);
}else if(age > 65) {
  price -= (price / 100 * 40);
} 

document.getElementById('price').innerHTML = price.toFixed(2) + '€'