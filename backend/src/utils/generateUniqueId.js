const crypto= require('crypto'); //para criptografia, tbm pode ser usado pra gerar caracteres aleatórios

module.exports= function generateUniqueId () {
    return crypto.randomBytes(4).toString('HEX');//a variavel crypto vai pegar 4 caracteres aleatorios e convertelos em string hexadecimal.
}