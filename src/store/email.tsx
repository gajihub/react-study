const SET_EMAIL = "SET_EMAIL";
const ADD_IMPORTANT_EMAIL = "ADD_IMPORTANT_EMAIL";
const REMOVE_IMPORTANT_EMAIL = "REMOVE_IMPORTANT_EMAIL";

export const setemail = (seleted: string, writeType?: string) => ({
  type: SET_EMAIL,
  seleted,
  writeType
});

export const addImportantEmail = (email: any) => ({
  type: ADD_IMPORTANT_EMAIL,
  email
});

export const removeImportantEmail = (email: any) => ({
  type: REMOVE_IMPORTANT_EMAIL,
  email
});

const initialState = {
  seleted: "basic",
  writeType: "write",
  importantEmails: []
};

export const emailReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_EMAIL:
      return {
        ...state,
        seleted: action.seleted,
        writeType: action.writeType
      };
    case ADD_IMPORTANT_EMAIL:
      return {
        ...state,
        importantEmails: [...state.importantEmails, action.email] // 중요 메일 추가
      };
    case REMOVE_IMPORTANT_EMAIL:
      return {
        ...state,
        importantEmails: state.importantEmails.filter(
          (email: any) => email.id !== action.email.id
        )
      };
    default:
      return state;
  }
};

export default emailReducer;
