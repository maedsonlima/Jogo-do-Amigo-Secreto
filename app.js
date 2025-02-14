let ListaDeAmigos = [];

function adicionarAmigo() {
ListaDeAmigos.push(document.getElementById('amigo').value.trim());

limparCampo();

listaNaTela(); //chama a função a baixo para mostrar a lista na tela
console.log (ListaDeAmigos);
}


function listaNaTela (){                            //exibe os nomes da lista array na tela.
let ListaUl = document.getElementById ('listaDeAmigosNaTela') // Obtém o elemento <ul> pelo ID
ListaUl.innerHTML = "";                             //limpa a lista Ul, para quando adicionar, não repetir o anterior.
    
for (let i = 0; i < ListaDeAmigos.length; i++) {
let criarElementoLi = document.createElement ('li'); // Cria um elemento <li>
criarElementoLi.textContent = ListaDeAmigos[i]; //Cria um novo item de lista (<li>) no HTML
ListaUl.appendChild(criarElementoLi); //Adiciona esse novo <li> dentro da lista <ul>, fazendo com que o nome apareça na tela.
};
                                                    /*
                                                    let i = 0; → Começa do primeiro item (posição 0).
                                                    i < ListaDeAmigos.length; → Continua até percorrer todos os amigos.
                                                    i++ → Aumenta o valor de i a cada volta.
                                                    */

                                                    /*.textContent pega ou define o texto visível dentro de um elemento HTML.
                                                    No seu código, ela está pegando o nome do amigo do array e colocando como texto dentro do <li>.
                                                    O .appendChild(criarLista) então adiciona esse <li> na lista do HTML.
                                                    */
}

function limparCampo(){
let nomeDigitado = document.getElementById('amigo');
nomeDigitado.value = '';
}