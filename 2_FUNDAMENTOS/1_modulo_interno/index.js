const meuModulo = require('./meu_modulo')
const soma = meuModulo.soma

soma(2,3)
soma(5,10)

// poderia invocar diretamente sem precisar criar uma variável, porém daria mais trabalho e seria desnecessário, exemplo abaixo

meuModulo.soma(10,10)