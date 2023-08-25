const express = require('express')
const { escritaDeArquivos, escritaDeArquivoJson } = require('./controladores/funcao')
const rota = express()

rota.get('/', escritaDeArquivos)
rota.post('/', escritaDeArquivoJson)

module.exports = rota