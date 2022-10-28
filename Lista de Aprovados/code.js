function code(entries) {
  const approvedNames = entries.filter(entry => entry.nota >= 5)
  .map(approved => approved.nome )
  return approvedNames
}

const notes = [
  { "nota": 10, "nome": "Lucas" },
  { "nota": 8, "nome": "Larissa" },
  { "nota": 4, "nome": "Antonio" },
  { "nota": 2, "nome": "Caio" },
  { "nota": 1, "nome": "Madalena" },
  { "nota": 5, "nome": "Estela" },
]

code(notes)

module.exports = code