export const Totals = ({ transactions }) => {
  const transactionsInp = transactions.filter((item) => {
    return item.quantity >= 0;
  });
  const transactionsOut = transactions.filter((item) => {
    return item.quantity < 0;
  });
  const totalQtVendida =
    transactionsOut.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0) * -1;
  const totalEstoque = transactions.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);
  const totalVlVendido = transactionsOut.reduce((acc, item) => {
    return acc + item.price * item.quantity * -1;
  }, 0);
  return (
    <>
      <h3>Totais</h3>
      <div>Quantidade total de frutas vendidas = {totalQtVendida}</div>
      <div>Quantidade total de frutas em estoque = {totalEstoque}</div>
      <div>Valor total de frutas vendas(saídas) = {totalVlVendido}</div>
    </>
  );
};
