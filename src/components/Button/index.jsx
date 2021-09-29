const Button = ({ useProduct, setProduto, setShow }) => {
  const gerar = () => {
    let aleatorio = Math.floor(Math.random() * 6) + 1;
    let filtrado = useProduct.find((item) => item.id === aleatorio);
    setProduto(filtrado);
    let porcentagem = Math.floor(Math.random() * (90 - 40) + 40);
    let desconto = (filtrado.price * (porcentagem / 100)).toFixed(2);
    setProduto({
      ...filtrado,
      porcentagem: porcentagem,
      desconto: desconto,
      preco: Number((filtrado.price - desconto).toFixed(2)),
    });
    setShow(true);
  };

  return (
    <div className="button">
      <h1>Clique para gerar seu desconto</h1>
      <button onClick={() => gerar()}>Gerar desconto</button>
    </div>
  );
};

export default Button;
