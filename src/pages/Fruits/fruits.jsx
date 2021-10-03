import { useState } from "react";
import { InputFruit } from "../../components/InputFruit/inputFruit";
import { ListFruits } from "../../components/ListFruits/listFruits";
import { Out } from "../../components/Out/out";
import { Inp } from "../../components/Inp/Inp";

export const Fruits = () => {
  const [transactions, setTransactions] = useState([
    { name: "banana", quantity: 100, price: 5 },
    { name: "morango", quantity: -10, price: 2 },
    { name: "laranja", quantity: 50, price: 6 },
  ]);
  const [exibir, setExibir] = useState(false);

  return (
    <>
      <h1>Frutas</h1>
      <InputFruit
        setTransactions={setTransactions}
        transactions={transactions}
      />
      {exibir ? (
        <Inp setTransactions={setTransactions} transactions={transactions} />
      ) : (
        <Out setTransactions={setTransactions} transactions={transactions} />
      )}
      <button onClick={() => setExibir(!exibir)}>
        {exibir ? "Ver saídas" : "Ver entradas"}
      </button>
      <h3>Todas as movimentações</h3>
      <ListFruits fruits={transactions} />
    </>
  );
};
