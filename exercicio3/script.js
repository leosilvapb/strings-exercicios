//Crie a const para a frase aqui
//A)

const frase = 'Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"'

console.log(frase)

//B)

const fraseTroca = frase.replace("verde","rosa").replace("azul","laranja")
console.log(fraseTroca)

//C)

console.log(fraseTroca.includes("verde","laranja"))

//Extra 

const fraseCasa = 'Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, '

const fraseGato = 'mas não deixe o gato sair"'

const novaCasa = fraseCasa + fraseGato.toUpperCase()
console.log (novaCasa.replace("verde","rosa").replace("azul","laranja"))


