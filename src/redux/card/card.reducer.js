import { ADD_CARD, REMOVE_CARD } from './card.type';

const initialState = {
  listCard: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD: {
      return {
        ...state,
        listCard: action.payload,
      }
    }
    case REMOVE_CARD: {
      return {
        ...state,
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