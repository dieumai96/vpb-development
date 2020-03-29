import { createSelector } from 'reselect';

const selectSupportNow = state => state.support;

export const selectSupportSegementType = createSelector(
  [selectSupportNow],
  support => support.segementType
);

