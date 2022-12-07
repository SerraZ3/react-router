import React, { useEffect, useState } from "react";
import {
  Container,
  Title,
  ToDoListContainer,
  ToDoListItem,
  ToDoListPrice,
  ToDoListTitle,
} from "./styles";
const Item = () => {
  useEffect(() => {
    console.log("Um item qualquer foi montado");
    return () => {
      // Só chama a função quando o item for desmontado
      console.log("O item foi desmontado");
    };
  }, []);
  return <h1>Um item qualquer</h1>;
};
function ToDoList() {
  const [toDoList, setToDoList] = useState([
    {
      label: "Pão",
      price: "R$ 10,00",
    },
    {
      label: "Pão",
      price: "R$ 10,00",
    },
    {
      label: "Pão",
      price: "R$ 10,00",
    },
    {
      label: "Pão",
      price: "R$ 10,00",
    },
    {
      label: "Pão",
      price: "R$ 10,00",
    },
    {
      label: "Pão",
      price: "R$ 10,00",
    },
    {
      label: "Pão",
      price: "R$ 10,00",
    },
    {
      label: "Pão",
      price: "R$ 10,00",
    },
    {
      label: "Pão",
      price: "R$ 10,00",
    },
  ]);
  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");
  const [showItem, setShowItem] = useState(false);

  useEffect(() => {
    console.log("A página foi montada");
    // Chama a função apenas uma vez
  }, []);
  useEffect(() => {
    console.log("Roda sempre que um estado atualizar");
  });
  useEffect(() => {
    console.log("Roda a função quando a variável item atualiza");
  }, [item]);

  return (
    <Container>
      <Title>To do list</Title>
      <br />
      {showItem ? <Item /> : null}
      <br />
      <div>
        <input
          placeholder="Nome do item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <br />
        <br />
        <input
          placeholder="Preço"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <br />
        <button
          onClick={() => {
            const _arrayTemp = [...toDoList];
            _arrayTemp.push({ label: item, price: price });
            setToDoList(_arrayTemp);
          }}
        >
          Salvar
        </button>
        <br />
        <br />
      </div>
      <button
        onClick={() => {
          const _arrayTemp = [...toDoList];
          _arrayTemp.push({ label: "Bolo", price: "R$ 5,00" });
          setToDoList(_arrayTemp);
        }}
      >
        Adicionar item
      </button>
      <button onClick={() => setShowItem(!showItem)}>Mostrar/Sumir item</button>
      <ToDoListContainer>
        {toDoList.map((item, idx) => (
          <ToDoListItem key={idx}>
            <ToDoListTitle>{item.label}</ToDoListTitle>
            <ToDoListPrice>{item.price}</ToDoListPrice>
          </ToDoListItem>
        ))}
      </ToDoListContainer>
    </Container>
  );
}

export default ToDoList;
