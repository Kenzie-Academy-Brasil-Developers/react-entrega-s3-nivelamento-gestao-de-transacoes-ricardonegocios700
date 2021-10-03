export const ListFruits = ({ fruits }) => {
  return (
    <>
      {fruits.map((item, index) => (
        <div key={index}>
          Nome: {item.name}, qtd: {item.quantity}, vlr: {item.price}
        </div>
      ))}
    </>
  );
};
