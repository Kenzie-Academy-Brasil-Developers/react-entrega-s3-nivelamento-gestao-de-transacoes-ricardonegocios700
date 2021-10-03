import { useState } from "react";
import { ListFruits } from "../ListFruits/listFruits";

export const InputFruit = ({ transactions, setTransactions }) => {
  const [name, setName] = useState("");
  const [quantify, setQuantify] = useState("");
  const [price, setPrice] = useState("");

  const handleClick = () => {
    setTransactions([
      ...transactions,
      {
        name: name,
        quantity: Number(quantify),
        price: Number(price),
      },
    ]);
    setName("");
    setQuantify("");
    setPrice("");
  };

  return (
    <>
      <h3>Lançamento de frutas</h3>
      <input
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Quantidade"
        value={quantify}
        onChange={(e) => setQuantify(e.target.value)}
      />
      <input
        placeholder="preço"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={handleClick}>Adicionar</button>
    </>
  );
};
