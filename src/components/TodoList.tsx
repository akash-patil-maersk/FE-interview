import React, { useEffect, useState } from "react";

export const TodoList = () => {
  const [todoList, setTodoList] = useState<any>(); // FIXME: remove the any type and replace it with the correct type

  // Fetch the list of todos when the component mounts
  useEffect(() => {
    fetch("/api/todos")
      .then((res) => res.json())
      .then((data) => {
        setTodoList(data);
      });
  }, []);

  // Handle toggling a todo
  const handleToggle = (id: number) => {
    fetch(`/api/todos/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        const newData = data;

        setTodoList((prevData) => {
          return prevData.map((todo: { id: number }) =>
            todo.id === id ? newData : todo
          );
        });
      });
  };

  // FIXME: this sometimes errors when the API fails?, debug and fix it
  return (
    <div className="space-y-4">
      <h2 className="text-2xl">Todo:</h2>
      <ul className="space-y-2 list-disc">
        {todoList &&
          todoList.map((todo) => (
            <li
              key={todo.task}
              onClick={() => handleToggle(todo.id)}
              className={todo.done ? "line-through" : ""}
            >
              {todo.task}
            </li>
          ))}
      </ul>
    </div>
  );
};
