import { SUPPORT_NOW_SEGEMENT_TYPE } from "./support-now.type";

const initialState = {
  segementType: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SUPPORT_NOW_SEGEMENT_TYPE: {
      return {
        ...state,
        segementType: action.payload,
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