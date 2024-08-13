import React, { useState } from "react";

const Todos = ({ todos, deleteTodo, setId }) => {
  return (
    <div className="container">
      {todos.map((todo) => (
        <div key={todo.id} className=" bg-dark p-3 my-3 text-center">
          <h1>{todo.title}</h1>
          <p>{todo.description}</p>
          <h3>{todo.id}</h3>
          <div>
            <button
              className="btn btn-warning mx-2"
              onClick={() => setId(todo.id)}
            >
              Edit
            </button>
            <button
              className="btn btn-danger"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todos;
