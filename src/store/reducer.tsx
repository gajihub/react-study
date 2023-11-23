export const emailState = {
  type: "emailSeleted",
  seleted: "basic"
};

// 초기 상태 정의
const initialState = {
  seleted: "basic"
};

// 리듀서 함수
export const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "emailSeleted":
      return { ...state, seleted: action.seleted };
    default:
      return state;
  }
};

export default rootReducer;
