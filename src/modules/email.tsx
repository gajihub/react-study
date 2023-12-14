const SET_EMAIL = "SET_EMAIL";

export const setemail = (seleted: string, wirteType?: string) => ({
  type: SET_EMAIL,
  seleted,
  wirteType
});

const initialState = {
  seleted: "basic",
  wirteType: "write"
};

export const emailReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_EMAIL:
      return {
        ...StaticRange,
        seleted: action.seleted,
        wirteType: action.wirteType
      };
    default:
      return state;
  }
};

export default emailReducer;
