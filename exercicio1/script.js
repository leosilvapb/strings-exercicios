const nome =prompt("Digite seu nome")
const comida1 =prompt("Digite sua primeira comida favorita")
const comida2 =prompt("Digite sua segunda comida favorita")
const comida3 =prompt("Digite sua terceira comida favorita")

console.log("Estas são as comidas favoritas de " + nome+":" + "\n- "+comida1 + "\n- "+comida2 + "\n- "+comida3 )

console.log(`"Exemplo com template strings" Estas são as comidas favoritas de ${nome}:
- ${comida1}
- ${comida2}
- ${comida3}`)
