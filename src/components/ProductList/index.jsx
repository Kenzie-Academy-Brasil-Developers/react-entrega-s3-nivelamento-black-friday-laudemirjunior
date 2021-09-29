const ProductList = ({ produto, handleClick }) => {
  return (
    <div id={produto.id} className="productList">
      <h1>Seu produto</h1>
      <h4>Nome do Produto: {produto.name}</h4>
      <h4>Preço original: {produto.price}</h4>
      <h4>Porcentagem do desconto: {produto.porcentagem}%</h4>
      <h4>Valor do desconto: R${produto.desconto}</h4>
      <h4>Preço a ser pago: R${produto.preco}</h4>
      <button onClick={() => handleClick(produto)}>
        Adicionar ao carrinho
      </button>
    </div>
  );
};

export default ProductList;
