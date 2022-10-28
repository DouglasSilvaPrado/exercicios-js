function code(entries) {
  const totalBalance = entries.reduce((ac, entry) => {
    if(entry.type === "CREDIT") return ac += entry.value
    if(entry.type === "DEBIT") return ac -= entry.value
    return ac
  }, 0)
  return totalBalance
}

const balance = [
  { "value": 23.53, "type": "CREDIT" },
  { "value": 47.32, "type": "DEBIT" },
  { "value": 17.22, "type": "DEBIT" },
  { "value": 5.12, "type": "DEBIT" },
  { "value": 199.23, "type": "CREDIT" }
]

code(balance)
module.exports = code