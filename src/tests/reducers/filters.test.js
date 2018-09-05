import moment from 'moment';
import filtersReducer from '../../store/reducers/filters';

test('Should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
});

test('Should set sortBy to amount', () => {
  const state = filtersReducer(undefined, {
    type: 'SORT_BY_AMOUNT'
  });

  expect(state.sortBy).toBe('amount');
});

test('Should set sortBy to date', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  };
  const action = { type: 'SORT_BY_DATE' };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe('date');
});
test('Should set sortBy to amount', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'date'
  };
  const action = { type: 'SORT_BY_AMOUNT' };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe('amount');
});

test('Should set text filter -1', () => {
  const text = 'This is filter';

  const action = { type: 'SET_TEXT_FILTER',text };
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe(text);
});
test('Should set text filter -2', () => {
  const text = 'This is filter';
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'date'
  };
  const action = { type: 'SET_TEXT_FILTER',text };
  const state = filtersReducer(currentState, action);
  expect(state.text).toBe(text);
});
// test('Should set text filter null by default', () => {
//   const currentState = {
//     text: 'me',
//     startDate: undefined,
//     endDate: undefined,
//     sortBy: 'date'
//   };
//   const action = { type: 'SET_TEXT_FILTER' };
//   const state = filtersReducer(currentState, action);
//   expect(state.text).toBe("");
// });
test('Should set startDate filter', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'date'
  };
  const action = { type: 'SET_START_DATE',startDate:0 };
  const state = filtersReducer(currentState, action);
  expect(state.startDate).toBe(0);
});
test('Should set endDate filter', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'date'
  };
  const action = { type: 'SET_END_DATE',endDate:10 };
  const state = filtersReducer(currentState, action);
  expect(state.endDate).toBe(10);
});

