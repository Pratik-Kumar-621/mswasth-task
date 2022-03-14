import { GET_DATA } from "../constants/actionTypes";

export const medicines = (medicines = [], action) => {
  switch (action.type) {
    case GET_DATA:
      return action.payload;
    default:
      return medicines;
  }
};
