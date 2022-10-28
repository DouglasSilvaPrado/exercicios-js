function code(meuObjeto) {
  Object.entries(meuObjeto).forEach(obj => {
    console.log(`Meu ${obj[0]} é ${obj[1]}`)
  })
}

const obj = {
  nome: "Lucas",
  cabelo: "Preto",
  monitor: "Grande",
  copo: "Transparente"
}

code(obj)

module.exports = code