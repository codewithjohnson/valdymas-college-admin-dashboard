export const yearReducer = (state, action) => {
  switch (action.type) {
    case "SET_YEAR":
      return { ...state, setYearRange: action.payload };
    default:
      return state;
  }
};
