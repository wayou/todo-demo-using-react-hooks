import {ACTION_TYPES} from './util';

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD:
      return {...state, todos: [...state.todos, action.payload]};
    case ACTION_TYPES.REMOVE:
      let tmp = state.todos.slice();
      tmp.splice(action.payload, 1);
      return {...state, todos: [...tmp]};
    case ACTION_TYPES.TOGGLE:
      state.todos[action.payload].isCompleted =
          !state.todos[action.payload].isCompleted
      return {
        ...state,
      };
    case ACTION_TYPES.CHANGE_TAB:
      return {...state, tab: action.payload};
    default:
      return state;
  }
};
