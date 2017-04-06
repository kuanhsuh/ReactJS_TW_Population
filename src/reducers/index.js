

import { combineReducers } from 'redux';
import CityRuducer from './reducer_city';

const rootReducer = combineReducers({
  city: CityRuducer
});

export default rootReducer;
