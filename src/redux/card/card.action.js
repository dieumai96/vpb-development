import { ADD_CARD, REMOVE_CARD, GET_ALL_CARD, GET_CARD_BY_PAGE, SEARCH_CARD_BY_TYPE } from './card.type';

export const actAddCard = (card) => ({
  type: ADD_CARD,
  payload: card,
})

export const actRemoveCard = (cardIndex) => ({
  type: REMOVE_CARD,
  payload: cardIndex,
})

export const actGetAllCard = () => ({
  type: GET_ALL_CARD,
})

export const actGetCardByPage = (pageIndex, pageSize) => ({
  type: GET_CARD_BY_PAGE,
  payload: {
    pageIndex,
    pageSize
  }
})

export const actGetCardByType = (pageIndex, pageSize, type) => ({
  type: SEARCH_CARD_BY_TYPE,
  payload: {
    pageInput: {
      pageIndex,
      pageSize
    },
    cardType: type,
  }
})