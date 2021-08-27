import {
  STORE_COMPONENT_HEADER_DATA,
  SET_COMPONENT_HEADER_DATA,
  // GET_COMPONENT_HEADER_DATA
} from "./types";

export const storeComponentHeaderData = (data) => ({
  type: STORE_COMPONENT_HEADER_DATA,
  payload: {
    data,
  },
});

export const setComponentHeaderData = (data) => ({
  type: SET_COMPONENT_HEADER_DATA,
  payload: {
    data,
  },
});

// export const hideHost = () => ({
//   type: GET_COMPONENT_HEADER_DATA,
// });
