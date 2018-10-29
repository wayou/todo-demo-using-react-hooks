import React, { useContext, useEffect } from "react";
import { TodoContext } from "../../TodoContext";

export default function Title() {
  const { state } = useContext(TodoContext);

  useEffect(() => {
    document.title = `TODOS(${state.todos.length})`;
  });

  return <h1>TODO LIST</h1>;
}
