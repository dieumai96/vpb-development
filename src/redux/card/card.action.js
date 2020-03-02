import { ADD_CARD, REMOVE_CARD, GET_ALL_CARD } from './card.type';

export const actAddCard = (card) => ({
  type: ADD_CARD,
  payload: card,
})

export const actRemoveCard = (cardIndex) => ({
  type: REMOVE_CARD,
  payload: cardIndex,
})

export const actGetAllCard = () => ({
  type : GET_ALL_CARD,
})