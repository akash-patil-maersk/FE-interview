import React, { FormEvent } from "react";

// input form for adding a todo to the list
export const TodoForm = () => {
  // handle Adding a todo
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const task = e.currentTarget.task.value;
    fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify({ task }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .then(() => window.location.reload());
  };
  return (
    <form onSubmit={handleSubmit} className="space-x-2">
      <input
        className="border border-gray-400 px-2 py-1"
        type="text"
        name="task"
        placeholder="New Todo"
      />
      <button className="border border-gray-400 px-2 py-1" type="submit">
        Add
      </button>
    </form>
  );
};
