import { ADD_CARD, REMOVE_CARD, GET_ALL_CARD } from './card.type';
import { data } from './card.data';
const initialState = {
  listCard: [],
  cardItemList: data,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD: {
      let newCardList = [...state.listCard, action.payload];
      return {
        ...state,
        listCard: newCardList,
      }
    }
    case REMOVE_CARD: {
      const cardIndex = action.payload;
      let newCardList = findCardOnList(state.listCard, cardIndex);
      return {
        ...state,
        listCard: newCardList,
      }
    }
    case GET_ALL_CARD: {
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

const findCardOnList = (listCard, cardIndex) => {
  return listCard.filter(card => card.dataIndex != cardIndex);
}
export default reducer;