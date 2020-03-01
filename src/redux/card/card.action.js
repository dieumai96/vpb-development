import { ADD_CARD, REMOVE_CARD } from './card.type';

export const actAddCard = (card) => ({
  type: ADD_CARD,
  payload: card,
})

export const actRemoveCard = (cardIndex) => ({
  type: REMOVE_CARD,
  payload: cardIndex,
})