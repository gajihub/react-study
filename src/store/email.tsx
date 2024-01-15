const SET_EMAIL = "SET_EMAIL";
const SET_EMAIL_LIST = "SET_EMAIL_LIST";
const ADD_IMPORTANT_EMAIL = "ADD_IMPORTANT_EMAIL";
const REMOVE_IMPORTANT_EMAIL = "REMOVE_IMPORTANT_EMAIL";
const ADD_READ_EMAIL = "ADD_READ_EMAIL";
const REMOVE_READ_EMAIL = "REMOVE_READ_EMAIL";

export const setemail = (seleted: string, writeType?: string) => ({
  type: SET_EMAIL,
  seleted,
  writeType
});

export const setemailList = (listType?: string) => ({
  type: SET_EMAIL_LIST,
  listType
});

export const addImportantEmail = (email: any) => ({
  type: ADD_IMPORTANT_EMAIL,
  email
});

export const removeImportantEmail = (email: any) => ({
  type: REMOVE_IMPORTANT_EMAIL,
  email
});

export const addReadEmail = (email: any) => ({
  type: ADD_READ_EMAIL,
  email
});

export const removeReadEmail = (email: any) => ({
  type: REMOVE_READ_EMAIL,
  email
});

const initialState = {
  seleted: "basic",
  writeType: "write",
  listType: "unRead",
  importantEmails: [],
  readCheckEamils: []
};

export interface RootState {
  emailReducer: any;
  seleted: string;
  writeType: string;
  listType: string;
  importantEmails: any[];
  readCheckEamils: any[];
}

export const emailReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_EMAIL:
      return {
        ...state,
        seleted: action.seleted,
        writeType: action.writeType,
        listType: action.listType
      };
    case ADD_IMPORTANT_EMAIL:
      return {
        ...state,
        importantEmails: [...state.importantEmails, action.email]
      };
    case REMOVE_IMPORTANT_EMAIL:
      return {
        ...state,
        importantEmails: state.importantEmails.filter(
          (email: any) => email.id !== action.email.id
        )
      };
    case ADD_READ_EMAIL:
      return {
        ...state,
        readCheckEamils: [...state.readCheckEamils, action.email]
      };
    case REMOVE_READ_EMAIL:
      return {
        ...state,
        readCheckEamils: state.readCheckEamils.filter(
          (email: any) => email.id !== action.email.id
        )
      };
    default:
      return state;
  }
};

export default emailReducer;
