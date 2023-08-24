const livros = require('./listaLivros')


let menor = 0;

for (let atual = 0; atual < livros.length; atual++){

    if(livros[atual].preco < livros[menor].preco){
        menor = atual
    }
}

console.log(livros[menor].preco)
console.log(livros[menor].titulo)