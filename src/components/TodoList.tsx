import React, { useEffect, useState } from "react";

export const TodoList = () => {
  const [data, setData] = useState<any>();

  // Fetch the list of todos when the component mounts
  useEffect(() => {
    fetch("/api/todos")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
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

        setData((prevData: any[]) => {
          return prevData.map((todo) => (todo.id === id ? newData : todo));
        });
      });
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl">Todo:</h2>
      <ul className="space-y-2 list-disc">
        {data &&
          data.map((todo: any) => (
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
