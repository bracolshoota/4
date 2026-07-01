let carrinho = [];

function adicionarCarrinho(produto) {
  carrinho.push(produto);
  alert(produto + " adicionado ao carrinho!");
}

function abrirCarrinho() {
  alert("Carrinho: " + carrinho.join(", "));
}

function pesquisarProduto() {
  let termo = document.getElementById("search").value.toLowerCase();
  if (termo.includes("taco")) {
    alert("Produto encontrado: " + termo);
  } else {
    alert("Nenhum produto encontrado.");
  }
}
