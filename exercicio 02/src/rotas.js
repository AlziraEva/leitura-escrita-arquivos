const express = require('express')
const { listagemProdutos, vendas } = require('./controladores/vendas')
const rota = express()

rota.get('/produtos', listagemProdutos)
rota.post('/produtos', vendas)

module.exports = rota