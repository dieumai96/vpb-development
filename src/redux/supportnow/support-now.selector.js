import { createSelector } from 'reselect';

const selectSupportNow = state => state.support;

export const selectSupportSegementType = createSelector(
  [selectSupportNow],
  support => support.segementType
);

export const selectSupportNowNoType = createSelector(
  [selectSupportNow],
  support => support.supportNoType
);

export const selectSupportNowHasType = createSelector(
  [selectSupportNow],
  support => support.supportHasType
);

export const selectSupportNowMenu = createSelector(
  [selectSupportNow],
  support => support.supportNowMenu
);

