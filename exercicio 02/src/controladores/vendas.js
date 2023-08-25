const produtos = require('../bancodedados')
const fs = require('fs/promises') // biblioteca que permite interagir com arquivos

const listagemProdutos = async (req, res) => {
    return res.status(200).json(produtos)
}

const vendas = async (req, res) => {
    const { produto_id, quantidade } = req.body
    const produtoEncontrado = produtos.find((produto) => {
        return produto.id === Number(produto_id)
    })
    console.log(produtoEncontrado)
    if (!produtoEncontrado) {
        return res.status(404).json('O produto não foi encontrado')
    }
    try {
        const vendas = await fs.readFile('./src/vendas.json') //leitura do arquivo
        const parseVendas = JSON.parse(vendas) // transforma o arquivo para formato JavaScrip para conseguir usar
        parseVendas.vendas.push({    //colocado no array vendas essas informações
            produto: produtoEncontrado,
            quantidade
        })
        await fs.writeFile('./src/vendas.json', JSON.stringify(parseVendas)) //subscrevendo o arquivo e tranformando em JSON

        return res.status(201).json('vendas registrada com sucesso.')

    } catch (erro) {
        return res.status(500).json('erro do servidor')
    }
}
module.exports = {
    listagemProdutos,
    vendas
}