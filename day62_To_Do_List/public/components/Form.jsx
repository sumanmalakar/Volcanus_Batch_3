import React, { useState, useEffect } from "react";

const Form = ({ addTodo, id, todos }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const temp = todos.filter((item) => item.id == id);
    console.log("edited data = ", temp);

    setTitle(temp[0]?.title);
    setDescription(temp[0]?.description);
  }, [id]); 

  const submitHandler = (e) => {
    e.preventDefault();
    if (id != "") {
      addTodo(id, title, description);
      alert(`Your To do has been updated...`);
      setTitle("");
      setDescription("");
    } else {
      addTodo(Math.random(), title, description);
      alert(`Your To do has been added...`);
      setTitle("");
      setDescription("");
    }
  };

  return (
    <>
      <div className="container text-center my-5">
        <form onSubmit={submitHandler}>
          title :{" "}
          <input
            value={title}
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />{" "}
          description:{" "}
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {id != "" && <button className="btn btn-warning mx-3">Edit</button>}
          {id === "" && (
            <button className="btn btn-warning mx-3">Submit</button>
          )}
        </form>
      </div>
    </>
  );
};

export default Form;
