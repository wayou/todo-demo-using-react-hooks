import "./TodoItem.css";
import { ACTION_TYPES } from "../../util";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import {TodoContext} from "../../TodoContext";

TodoItem.propTypes = {
  todo: PropTypes.object,
  index: PropTypes.number
};

export default function TodoItem(props) {
  const { todo, index } = props;
  const {dispatch} = useContext(TodoContext);
  const label = todo.isCompleted ? "⟲" : "✔";
  const title = todo.isCompleted ? "restore" : "mark completed";
  return (
    <div className="todo-item">
      {`#${index} ${todo.content}`}

      <button
        className="btn"
        title={title}
        onClick={() => {
          dispatch({
            type: ACTION_TYPES.TOGGLE,
            payload: index
          });
        }}
      >
        {label}
      </button>
      <button
        className="btn"
        title="remove"
        onClick={() => {
          dispatch({
            type: ACTION_TYPES.REMOVE,
            payload: index
          });
        }}
      >
        ❌
      </button>
    </div>
  );
}
