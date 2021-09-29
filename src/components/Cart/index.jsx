const Cart = ({ currentSale }) => {
  return (
    <div className="card">
      <h1>Carinho de compras</h1>
      {currentSale.map((item) => {
        return (
          <div key={item.id} className="product">
            <h2>Nome do Produto: {item.name}</h2>
            <h3>Preço original: {item.price}</h3>
            <h3>Porcentagem do desconto: {item.porcentagem}%</h3>
            <h3>Valor do desconto: R${item.desconto}</h3>
            <h3>Preço a ser pago: R${item.preco}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
