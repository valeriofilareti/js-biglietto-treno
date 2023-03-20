//const age = prompt('quanti anni hai?')
//const km = prompt('quanti km vuoi percorrere?') 

let price = km * 0.21;

console.log(price);

if(age < 18) {
  price = price - (price / 100 * 20);
} else if (age > 65) {
  price = price - (price / 100 * 40);
} else {
  price = price;
}



console.log(price);