import React, { useState } from "react";
import Todos from "./components/Todos";
import Form from "./components/Form";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Inception",
      description:
        "A skilled thief is given a chance at redemption if he can successfully perform an inception.",
    },
  ]);
  const [id, setId] = useState("");

  // add todo
  const addTodo = (id, title, desc) => {
    const obj = {
      id,
      title,
      description: desc,
    };

    if (id != "") {
      console.log(obj);
      setTodos((prevData) =>
        prevData.map((item) => (item.id === id ? { ...item, ...obj } : item))
      );
    } else {
      setTodos([...todos, obj]);
    }

    setId(" ");
  };

  // delete todo
  const deleteTodo = (id) => {
    if (confirm("Are you sure want to delete")) {
      const filterTodo = todos.filter((item) => item.id != id);
      setTodos(filterTodo);
      console.log(filterTodo);
    }
  };

  // console.log("edit ke liye id aa gayi = ",id)

  return (
    <>
      <Form addTodo={addTodo} todos={todos} id={id} />
      <div>
        <Todos todos={todos} deleteTodo={deleteTodo} setId={setId} />
      </div>
    </>
  );
};

export default App;
