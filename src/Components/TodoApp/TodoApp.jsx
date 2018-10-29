// TODO: use hook to do form validation

import React from "react";
import TodoList from "./Components/TodoList/TodoList";
import Tabs from "./Components/Tabs/Tabs";
import "./TodoApp.css";
import { ContextProvider } from "./TodoContext";
import Action from "./Components/Action/Action";
import Title from "./Components/Title/Title";

export default function TodoApp() {
  return (
    <ContextProvider>
      <div className="todo-app">
        <Title />
        <Tabs />
        <Action />
        <TodoList />
      </div>
    </ContextProvider>
  );
}
