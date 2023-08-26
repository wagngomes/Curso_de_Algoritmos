const livros = require('./listaLivros')
const menorValor = require('./menorValor')

console.log(livros)

livros.forEach((livro, indice) => {
    let menor = menorValor(livros, indice)

    let livroAtual = livros[indice]
    let livroMenorPreco = livros[menor]

    livros[indice] = livroMenorPreco
    livros[menor] = livroAtual


})

console.log(livros)