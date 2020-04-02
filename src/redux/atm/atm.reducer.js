import { ATM_RESPONSE_LIST, LOCALTION } from "./atm.type";

const initialState = {
  atmList: [],
  localtion: {},
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ATM_RESPONSE_LIST: {
      return {
        ...state,
        atmList: action.payload,
      }
    }
    case LOCALTION: {
      return {
        ...state,
        localtion: action.payload,
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