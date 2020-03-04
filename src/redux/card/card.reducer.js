import { ADD_CARD, REMOVE_CARD, GET_ALL_CARD, GET_CARD_BY_PAGE, SEARCH_CARD_BY_TYPE } from './card.type';
import { data } from './card.data';
const initialState = {
  listCard: [],
  cardItemList: {},
  getAllCard: [],
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
        getAllCard: data,
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

    case SEARCH_CARD_BY_TYPE: {
      const { pageInput, cardType } = action.payload;
      let cardItemList = getCardByPage(pageInput, cardType);
      let totalItem = totalItemSearch(cardType);
      return {
        ...state,
        cardItemList: {
          data: [...cardItemList],
          totalItem
        }
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

const getCardByPage = (pageInput, type) => {
  const { pageIndex, pageSize } = pageInput;
  let filterData = data;
  if (type) {
    filterData = filterData.filter(item => item.parentType == type);
  }
  filterData = filterData.filter((item, index) => {
    return (index >= (pageIndex - 1) * pageSize && index < pageIndex * 6)
  })
  return filterData;
}

const totalItemSearch = (type) => {
  let totalItem = 0;
  data.forEach(item => item.parentType == type ? totalItem = totalItem + 1 : totalItem = totalItem);
  return totalItem;
}

export default reducer;