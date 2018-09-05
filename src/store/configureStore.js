import { createStore, combineReducers } from 'redux';
import expensesReducer  from '../store/reducers/expenses'
import filtersReducer  from '../store/reducers/filters'

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};