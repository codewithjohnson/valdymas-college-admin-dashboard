const initialState = {
  firstname: "",
  lastname: "",
  middlename: "",
  email: "",
  phoneNumber: "",
  gender: "",
  dateOfBirth: null,
  contactAddress: "",
  religion: "",
  nationality: "",
  maritalStatus: "",
  stateOfOrigin: "",
  lga: "",
};

export const biodataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "BIODATA/ADDED":
      return {
        ...state,
        firstname: action.payload.firstname,
        lastname: action.payload.lastname,
        middlename: action.payload.middlename,
        email: action.payload.email,
        phoneNumber: action.payload.phoneNumber,
        gender: action.payload.gender,
        dateOfBirth: action.payload.dateOfBirth,
        contactAddress: action.payload.contactAddress,
        religion: action.payload.religion,
        nationality: action.payload.nationality,
        maritalStatus: action.payload.maritalStatus,
        stateOfOrigin: action.payload.stateOfOrigin,
        lga: action.payload.lga,
      };

    default:
      return state;
  }
};
