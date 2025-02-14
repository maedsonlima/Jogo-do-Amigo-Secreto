## Explicação: Lista de Amigos no HTML e JavaScript

### ✨ 1. O que são os elementos `<ul>` e `<li>`?

No HTML, usamos listas para organizar e exibir informações de maneira clara. Existem dois tipos principais de listas:
- **`<ul>` (unordered list)**: Lista não ordenada, onde os itens aparecem com marcadores.
- **`<li>` (list item)**: Cada item dentro da lista.

**Exemplo:**
```html
<ul>
  <li>Mateus</li>
  <li>Lucas</li>
  <li>João</li>
</ul>
```
Essa estrutura exibe os nomes em uma lista.

---

### 🤔 2. Por que limpar a lista antes de adicionar novos itens?

Se não limparmos a lista antes de atualizar, os itens antigos serão adicionados novamente, gerando repetição na tela.

**Cenário sem limpar:**
1. Adiciona "Mateus".
2. Adiciona "Lucas".
3. Atualiza a lista, e agora aparecem dois "Mateus" e dois "Lucas".

Para evitar isso, usamos:
```js
listaHTML.innerHTML = ""; // Remove todos os itens antes de atualizar
```
Isso apaga a lista da tela, mas os nomes ainda estão salvos no array.

---

### 📊 3. Como funciona o `for` e por que percorrer o array?

O `for` serve para percorrer (ou iterar) todos os elementos do array e adicionar cada um à lista no HTML.

**Estrutura:**
```js
for (let i = 0; i < ListaDeAmigos.length; i++) {
```
- `let i = 0;` → Começa do primeiro item (posição 0).
- `i < ListaDeAmigos.length;` → Continua até percorrer todos os amigos.
- `i++` → Aumenta o valor de `i` a cada volta.

Isso permite que cada nome da lista seja processado individualmente e adicionado à tela.

---

### ✅ 4. Explicação do código para adicionar os nomes na lista

```js
let criarLista = document.createElement('li'); // Cria um elemento <li>
```
Cria um novo item de lista (`<li>`) no HTML.

```js
criarLista.textContent = ListaDeAmigos[i]; // Define o nome dentro do <li>
```
Define o texto do `<li>` com o nome do array na posição `i`.

```js
listaHTML.appendChild(criarLista); // Adiciona o <li> na <ul>
```
Adiciona esse novo `<li>` dentro da lista `<ul>`, fazendo com que o nome apareça na tela.

---

Com isso, conseguimos exibir a lista de amigos de forma dinâmica no site! 🎉

