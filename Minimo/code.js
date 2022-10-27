function minimo(num1, num2) {
   if(num1 < num2) return num1;
   return num2;
}

console.log(minimo(0, 10));

console.log(minimo(0, -10));

module.exports = minimo