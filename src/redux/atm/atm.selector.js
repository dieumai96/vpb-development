import { createSelector } from 'reselect';

const selectAtm = state => state.atm;

export const selectAtmList = createSelector(
  [selectAtm],
  atm => atm.atmList
);
