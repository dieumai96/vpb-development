import { ADD_CARD, REMOVE_CARD, GET_ALL_CARD, GET_CARD_BY_PAGE, SEARCH_CARD_BY_TYPE } from './card.type';
import { data } from './card.data';
const initialState = {
  listCard: [],
  cardItemList: {},
  getAllCard: [],
  searchKey: '',
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
      const { pageInput, cardType, childType } = action.payload;
      let cardItemList = getCardByPage(pageInput, cardType, childType);
      let totalItem = totalItemSearch(cardType, childType);
      return {
        ...state,
        cardItemList: {
          data: [...cardItemList],
          totalItem,
        },
        cardType: cardType != 'ALL CARD' ? cardType : '',
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

const getCardByPage = (pageInput, type, childType) => {
  const { pageIndex, pageSize } = pageInput;
  let filterData = data;
  if (type) {
    if (type != 'ALL CARD') {
      filterData = filterData.filter(item => item.parentType == type);
    }
  }
  if (childType) {
    filterData = filterData.filter(item => item.type == childType);
  }

  filterData = filterData.filter((item, index) => {
    return (index >= (pageIndex - 1) * pageSize && index < pageIndex * 6)
  })
  return filterData;
}

const totalItemSearch = (type, childType) => {
  let totalItem = 0;
  if (type != 'ALL CARD') {
    if (!childType) {
      data.forEach(item => item.parentType == type ? totalItem = totalItem + 1 : totalItem = totalItem);
    } else {
      data.forEach(item => (item.parentType == type && item.type == childType) ? totalItem = totalItem + 1 : totalItem = totalItem);
    }
  } else {
    totalItem = data.length;
  }
  return totalItem;
}

export default reducer;