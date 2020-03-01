import { createSelector } from 'reselect';

const selectCard = state => state.card;

export const selectCardItems = createSelector(
  [selectCard],
  card => card.listCard
);
