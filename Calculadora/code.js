class Calculadora {
  somar(num1, num2){
    return num1 + num2
  }

  subtrair(num1, num2){
    return num1 - num2
  }

  dividir(num1, num2){
    return num1 / num2
  }

  multiplicar(num1, num2){
    return num1 * num2
  }
}

const calculadora = new Calculadora()

calculadora.somar(1, 3)
calculadora.subtrair(2, 1)
calculadora.dividir(4, 2)
calculadora.multiplicar(4, 2)

module.exports = Calculadora