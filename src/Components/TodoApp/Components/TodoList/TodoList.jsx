import React, { useContext } from "react";
import TodoItem from "../TodoItem/TodoItem";
import { TodoContext } from "../../TodoContext";
import { TAB_TYPES } from "../../util";

export default function TodoList() {
  const { state } = useContext(TodoContext);

  function getTodos() {
    switch (state.tab) {
      case TAB_TYPES.ALL:
        return state.todos;
      case TAB_TYPES.COMPLETED:
        return state.todos.filter(todo => todo.isCompleted);
      case TAB_TYPES.UNCOMPLETED:
        return state.todos.filter(todo => !todo.isCompleted);
      default:
        return `unknown type`;
    }
  }

  return (
    <div className="todo-list">
      {getTodos().map((todo, index) => {
        return <TodoItem key={index} todo={todo} index={index} />;
      })}
    </div>
  );
}
