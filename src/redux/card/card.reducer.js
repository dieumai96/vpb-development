import { ADD_CARD, REMOVE_CARD, GET_ALL_CARD, GET_CARD_BY_PAGE } from './card.type';
import { data } from './card.data';
const initialState = {
  listCard: [],
  cardItemList: {},

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
        cardItemList: data,
      }
    }
    case GET_CARD_BY_PAGE: {
      let cardItemList = getCardByPage(action.payload);
      return {
        ...state,
        cardItemList: {
          data: [...cardItemList],
          totalItem: data.length,
        },

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

const getCardByPage = (pageInput) => {
  console.log(pageInput);
  const { pageIndex, pageSize } = pageInput;
  return data.filter((item, index) => {
    return (index >= (pageIndex - 1) * pageSize && index < pageIndex * 6)
  })
}
export default reducer;