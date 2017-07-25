import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ErrorReducer from './error_reducer';
import HomeReducer from './home_reducer';
import FilterReducer from './filter_reducer';
import TripReducer from './trip_reducer';

const rootReducer = combineReducers({
  currentUser: SessionReducer,
  errors: ErrorReducer,
  homes: HomeReducer,
  filters: FilterReducer,
  trips: TripReducer
});

export default rootReducer;
