import React, { createContext, useReducer } from "react";
import { TAB_TYPES } from "./util";
import { reducer } from "./reducer";

const initialState = {
  tab: TAB_TYPES.ALL,
  todos: []
};

export const TodoContext = createContext();

export const ContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {props.children /* eslint-disable-line react/prop-types */}
    </TodoContext.Provider>
  );
};
