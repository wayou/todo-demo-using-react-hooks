import "./Tabs.css";
import { TAB_TYPES, ACTION_TYPES } from "../../util";
import { TodoContext } from "../../TodoContext";
import React, { useContext } from "react";

export default function Tabs() {
  const { state, dispatch } = useContext(TodoContext);

  function getCount(type) {
    switch (type) {
      case TAB_TYPES.ALL:
        return state.todos.length;
      case TAB_TYPES.COMPLETED:
        return state.todos.filter(todo => todo.isCompleted).length;
      case TAB_TYPES.UNCOMPLETED:
        return state.todos.filter(todo => !todo.isCompleted).length;
      default:
        throw new Error("unknown tab type");
    }
  }

  return (
    <div className="dashboard">
      {Object.keys(TAB_TYPES).map(type => {
        return (
          <a
            key={type}
            href="javascript:;"
            className={`btn btn-text ${state.tab === type ? "active" : ""}`}
            onClick={() => {
              dispatch({
                type: ACTION_TYPES.CHANGE_TAB,
                payload: type
              });
            }}
          >
            {type}:{getCount(type)}
          </a>
        );
      })}
    </div>
  );
}
