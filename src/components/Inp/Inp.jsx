import { ListFruits } from "../ListFruits/listFruits";

export const Inp = ({ transactions, setTransactions }) => {
  let fruits = transactions.filter((item) => {
    return item.quantity >= 0;
  });
  return (
    <>
      <h3>Movimentação de entrada</h3>
      <ListFruits fruits={fruits} />
    </>
  );
};
