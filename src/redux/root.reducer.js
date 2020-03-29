import { combineReducers } from 'redux';

import cardReducer from './card/card.reducer';
import atmReducer from './atm/atm.reducer';
import supportNowReducer from './supportnow/support-now.reducer';

export default combineReducers({
  card: cardReducer,
  atm: atmReducer,
  support: supportNowReducer
});