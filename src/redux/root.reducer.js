import { combineReducers } from 'redux';

import cardReducer from './card/card.reducer';
import atmReducer from './atm/atm.reducer';

export default combineReducers({
  card: cardReducer,
  atm: atmReducer
});