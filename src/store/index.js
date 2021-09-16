import { combineReducers } from 'redux';
import manageUser from './manageUser';
import storeAnswer from './storeAnswer';
import stringAnswer from './stringAnswer';
import manageWholeValues from './manageWholeValues';
import manageSortedValues from './manageSortedValues';
import manageHighValues from './manageHighValues';
import manageLowValues from './manageLowValues';

// root reducer
// combine reducers
const rootReducer = combineReducers({
  manageUser,
  storeAnswer,
  stringAnswer,
  manageWholeValues,
  manageSortedValues,
  manageHighValues,
  manageLowValues,
})

export default rootReducer;