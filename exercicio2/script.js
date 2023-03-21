const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
console.log(minhaString)
console.log(`O tamanho da string com os espaços é: ${minhaString.length}`)

const minhaNovaString = minhaString.trim()
console.log(minhaNovaString)
console.log(`O tamanho da string sem os espaços é: ${minhaNovaString.length}`)

//console.log(minhaNovaString.replace("________", "sticioso"))
const minhaStringAtualizada = minhaNovaString.replace("________", "sticioso")
console.log(minhaStringAtualizada)