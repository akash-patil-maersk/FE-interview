import type { NextApiRequest, NextApiResponse } from "next";
import { todos } from "..";

// Flaky Todo handler
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any> //TODO: Fix any
) {
  // fail 10% of the time
  if (Math.random() < 0.1) {
    return res.status(500).json({ error: "API Error" });
  }

  // Handle Edit Todo
  if (req.method === "PUT") {
    const id = Number(req.query.id);
    const todo = todos.find((todo) => todo.id === id);
    if (!todo) {
      return res.status(404).json({ error: "Todo not found" });
    }
    todo.done = !todo.done;
    return res.status(200).json(todo);
  }
}
