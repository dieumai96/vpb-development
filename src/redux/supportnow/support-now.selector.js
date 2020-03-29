import { createSelector } from 'reselect';

const selectSupportNow = state => state.support;

export const selectSupportSegementType = createSelector(
  [selectSupportNow],
  suport => atm.segementType
);

