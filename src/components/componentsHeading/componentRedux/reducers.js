import { SET_COMPONENT_HEADER_DATA } from "./types";

const INITIAL_STATE = {
  // data,
};

const componentHeaderReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SET_COMPONENT_HEADER_DATA:
      let temp = Object.keys(payload.data);
      let temp1 = payload.data[temp];
      return {
        ...state,
        [temp]: { ...state[temp], ...temp1 },
      };

    default:
      return state;
  }
};

export default componentHeaderReducer;
