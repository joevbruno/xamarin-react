import { combineReducers } from 'redux';
import dashboardReducer from '../modules/dashboard/redux';

export default combineReducers({
  dashboard: dashboardReducer
});
