import { ADD_CARD, REMOVE_CARD } from './card.type';

const initialState = {
  listCard: [],
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