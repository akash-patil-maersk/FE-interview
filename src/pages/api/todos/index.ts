import type { NextApiRequest, NextApiResponse } from "next";

// Data
export const todos = [
  { id: 1, task: "Learn React", done: true },
  { id: 2, task: "Learn TypeScript", done: true },
  { id: 3, task: "Learn Next.js", done: true },
  { id: 4, task: "Properly type the api", done: false },
  { id: 5, task: "Remove any type in TodoList", done: false },
  { id: 6, task: "Handle api errors", done: false },
  { id: 7, task: "Prevent refresh on add todo", done: false },
];

// Flaky Todo handler
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any> //TODO: Fix any
) {
  // fail 10% of the time
  if (Math.random() < 0.1) {
    return res.status(500).json({ error: "API Error" });
  }

  // Handle Add Todo
  if (req.method === "POST") {
    const newTodo = {
      id: todos.length + 1,
      task: req.body.task,
      done: false,
    };
    todos.push(newTodo);
    return res.status(201).json(newTodo);
  }

  // Handle Get Todos
  if (req.method === "GET") {
    return res.status(200).json(todos);
  }
}
