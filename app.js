let listaDeAmigos = [];

function adicionarAmigo() {
let nomeInserido = document.getElementById('amigo').value.trim(); //torna o botão "adicionar" funcional e elimina os espaços com o trim.
    if (nomeInserido ==='') {
        alert ("Inválido, campo vazio, digite um nome");
    
    }else {
    limparCampo();
    listaDeAmigos.push(nomeInserido);
    listaNaTela();                                               //chama a função a baixo para mostrar a lista na tela
    }
}

function listaNaTela (){                                        //exibe os nomes da lista array na tela.
let ListaUl = document.getElementById ('listaDeAmigosNaTela')   // Obtém o elemento <ul> pelo ID
ListaUl.innerHTML = "";                                         //limpa a lista Ul, para quando adicionar, não repetir o anterior.
    
    for (let i = 0; i < listaDeAmigos.length; i++) {
    
    /*  let i = 0; → Começa do primeiro item (posição 0).
        i < ListaDeAmigos.length; → Continua até percorrer todos os amigos.
        i++ → Aumenta o valor de i a cada volta.  */

    let criarElementoLi = document.createElement ('li');        // Cria um elemento <li>
    criarElementoLi.textContent = listaDeAmigos[i];             //Cria um novo item de lista (<li>)
    ListaUl.appendChild(criarElementoLi);                       //Adiciona esse novo <li> dentro da lista <ul> fazendo o nome aparecer na tela.
    };
}

function sortearAmigo() {
let indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length);                  //gera um número aleatório e multiplica pela extenção da array e arredonda.
let nomeSorteado = listaDeAmigos[indiceSorteado];                                       //o nome sorteado será o nome que está no indice sorteado dentro do array

let resultadoHtml = document.getElementById('resultado');                               //Seleciona o campo onde o resultado será mostrado
let elementoLiResultado = document.createElement ('li');                                //Cria um elemento <Li>
elementoLiResultado.textContent = (`O sortudo da vez é: ${nomeSorteado}`);              //define o valor do Li, no caso será o texto e o resultado.
resultadoHtml.appendChild(elementoLiResultado);                                         //insere o texto do Li, na lista Lu do html.
}   

function limparCampo(){                                                                 //Serve para limpar a caixa de pesquisa
let nomeDigitado = document.getElementById('amigo');                                    //seleciona a caixa texto
nomeDigitado.value = '';                                                                //limpa a caixa de pesquisa
}