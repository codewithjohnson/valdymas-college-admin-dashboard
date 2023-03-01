// Function that returns dispatch object for adding biodata
export const addBiodataDispatcher = (data) => {
  return {
    type: "BIODATA/ADDED",
    payload: data,
  };
};
