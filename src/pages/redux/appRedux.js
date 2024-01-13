const SET_INSTITUTES = "SET_INSTITUTES";
const LOADING = "LOADING";

const stateInitial = {
  institutes: [],
  loading: false,
};

export const appSelector = {
  institutes: (state) => state.institutes,
};

export const appActions = {
  loading: (payload) => ({ type: "LOADING", payload }),
  setInstitutes: (payload) => ({
    type:SET_INSTITUTES,
    payload,
  }),
};


export const appReducer = (state = stateInitial, action) => {
  switch (action.type) {
    case SET_INSTITUTES:
      return {
        ...state,
        institutes: action.payload,
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
