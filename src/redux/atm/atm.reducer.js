import { ATM_RESPONSE_LIST } from "./atm.type";

const initialState = {
  atmList: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ATM_RESPONSE_LIST: {
      return {
        ...state,
        atmList: action.payload,
      }
    }
    default: {
      return {
        ...state,
      }
    }
  }
}

export default reducer;