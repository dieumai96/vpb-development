import { SUPPORT_NOW_SEGEMENT_TYPE, SUPPORT_NOW_GET_NO_TYPE_SUCCESS, SUPPORT_NOW_GET_NO_TYPE, SUPPORT_NOW_GET_NO_TYPE_FAIL, SUPPORT_NOW_GET_HAS_TYPE_SUCCESS, SUPPORT_NOW_GET_HAS_TYPE_FAIL, SUPPORT_NOW_GET_MENU_SUCCESS, SUPPORT_NOW_GET_MENU_FAIL } from "./support-now.type";

const initialState = {
  segementType: null,
  supportNoType: {},
  supportHasType: {},
  supportNowMenu: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SUPPORT_NOW_SEGEMENT_TYPE: {
      return {
        ...state,
        segementType: action.payload,
      }
    }
    case SUPPORT_NOW_GET_NO_TYPE_SUCCESS: {
      return {
        ...state,
        supportNoType: action.payload
      }
    }
    case SUPPORT_NOW_GET_NO_TYPE_FAIL: {
      return {
        ...state,
        supportNoType: {},
      }
    }
    case SUPPORT_NOW_GET_HAS_TYPE_SUCCESS: {
      return {
        ...state,
        supportHasType: action.payload
      }
    }
    case SUPPORT_NOW_GET_HAS_TYPE_FAIL: {
      return {
        ...state,
        supportHasType: {},
      }
    }

    case SUPPORT_NOW_GET_MENU_SUCCESS: {
      return {
        ...state,
        supportNowMenu: action.payload,
      }
    }
    case SUPPORT_NOW_GET_MENU_FAIL: {
      return {
        ...state,
        supportNowMenu: [],
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