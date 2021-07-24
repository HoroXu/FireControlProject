import * as type from "./action-type";
export const mc = (state = '', action) => {
  switch (action.type) {
    case type.SET_MC:
      return action.mc;
    default:
      return state;
  }
};
