// reducer is a java script function
export const INITIAL_STATE = [];

const insertbooks = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "INSERTBOOKS":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default insertbooks;
