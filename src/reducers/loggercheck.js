// reducer is a java script function

const loggercheck = (state = false, action) => {
  switch (action) {
    case "SIGN_IN":
      return !state;
    default:
      return state;
  }
};

export default loggercheck;
