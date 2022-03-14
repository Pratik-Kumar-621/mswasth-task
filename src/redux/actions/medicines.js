import { GET_DATA } from "../constants/actionTypes";

import * as api from "../../api";

export const getMedicineData = () => async (dispatch) => {
  try {
    const { data } = await api.fetchData();

    dispatch({ type: GET_DATA, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
