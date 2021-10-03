import { ListFruits } from "../ListFruits/listFruits";

export const Out = ({ transactions, setTransactions }) => {
  let fruits = transactions.filter((item) => {
    return item.quantity < 0;
  });
  return (
    <>
      <h3>Movimentação de saída</h3>
      <ListFruits fruits={fruits} />
    </>
  );
};
