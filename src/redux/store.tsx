import { createStore } from "redux";

interface AppState {
  selected: string;
}

const initialState: AppState = {
  selected: "basic" // 기본 선택
};

const rootReducer = (state: AppState = initialState, action: any) => {
  switch (action.type) {
    case "SET_SELECTED":
      return { ...state, selected: action.payload };
    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default store;
