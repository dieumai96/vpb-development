import { createSelector } from 'reselect';

const selectCard = state => state.card;

export const selectCardItems = createSelector(
  [selectCard],
  card => card.listCard
);

export const selectAllCards = createSelector(
  [selectCard],
  card => card.cardItemList
)

export const selectCardByPage = createSelector(
  [selectCard],
  card => card.cardItemList
)