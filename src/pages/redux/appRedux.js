const ADD_TODO = "ADD_TODO";
const COMPLETE_TODO = "COMPLETE_TODO";
const DELETE_TODO = "DELETE_TODO";
const LOADING = "LOADING";

const stateInitial = {
  todo: [],
  loading: false,
};

export const appSelector = {
  todo: (state) => state.todo,
};

export const appActions = {
  loading: (payload) => ({ type: "LOADING", payload }),
  addTodo: (payload) => ({
    type: ADD_TODO,
    payload,
  }),
  setCompletedTodo: (payload) => ({
    type: COMPLETE_TODO,
    payload,
  }),
  deleteTodo: (id) => ({
    type: DELETE_TODO,
    id,
  }),
};


export const appReducer = (state = stateInitial, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todo: [
          ...state.todo,
          {
            id: action.payload.id,
            text: action.payload.text,
            completed: false,
          },
        ],
      };
    case COMPLETE_TODO:
      return {
        ...state,
        todo: state.todo.map((t) => {
          if (t.id === action.payload.id) {
            return {
              ...t,
              completed: action.payload.completed,
            };
          }
          return t;
        }),
      };
    case DELETE_TODO:
      return {
        ...state,
        todo: state.todo.filter((t) => t.id !== action.id),
      };
      case LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
