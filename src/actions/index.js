export const insertbook = (name) => {
  return {
    type: "INSERTBOOKS",
    payload: name,
  };
};
