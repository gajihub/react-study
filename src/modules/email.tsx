const SET_EMAIL = "SET_EMAIL";

export const setemail = (seleted: any) => ({
  type: SET_EMAIL,
  seleted
});

const initialState = {
  seleted: "basic"
};

export const emailReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_EMAIL:
      return {
        ...StaticRange,
        seleted: action.seleted
      };
    default:
      return state;
  }
};

export default emailReducer;
