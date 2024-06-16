function adicionar() {
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split("-")[0];
    let valorUnitario = parseInt(produto.split("R$")[1]);
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let listaProduto = document.getElementById("lista-produtos");

    let totalElement = document.getElementById('valor-total');
    let preco = quantidade * valorUnitario;
    let novoTotal = parseFloat(totalElement.textContent.replace('R$', '')) + preco;
    totalElement.textContent = 'R$' + novoTotal.toFixed(2);

    listaProduto.innerHTML += `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>`;

}
function limpar(){
    let listaProduto = document.getElementById("lista-produtos");
    listaProduto.innerHTML =""
    let totalElement = document.getElementById('valor-total')
    totalElement.textContent = 'R$' + 0;
}
