const fs = require('fs/promises') // importar a função fs


const escritaDeArquivos = async (req, res) => {
    const texto = 'tudo bem?'
    await fs.writeFile('./src/b.txt', texto) // função para escrever no artigo
    res.json('ok')
}

const escritaDeArquivoJson = async (req, res) => {
    const { nome, idade } = req.body
    try {
        const teste = await fs.readFile('./src/usuarios.json') //leitura do arquivo usuarios; 
        const pessoas = JSON.parse(teste) //transformação do arquivo JSON em formato javaScript;
        pessoas.push({ nome, idade }) // colocando dentro do arquivo usuarios o body(corpo) da URL;

        const pessoasStringify = JSON.stringify(pessoas) //transforma o arquivo de JavaScript para formato JSON;
        await fs.writeFile('./src/usuarios.json', pessoasStringify) //subescreve o arquivo usuarios (substitui o que estava nele = no formato JavaScript, por essa outra variavel no formato = JSON)

        return res.json('pessoa cadastrada com sucesso')
    } catch (erro) {
        return res.json(`Deu erro: ${erro.message}`)
    }
}

module.exports = {
    escritaDeArquivos,
    escritaDeArquivoJson
}