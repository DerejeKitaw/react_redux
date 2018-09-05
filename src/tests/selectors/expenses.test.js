import moment from 'moment';
import {filteredExpenses } from '../../store/selectors/expenses';
const allExpenses = [{
  id: '1',
  description: 'School',
  note: '',
  amount: 194,
  createdAt: moment(0).valueOf()
}, {
  id: '2',
  description: 'Home',
  note: '',
  amount: 94,
  createdAt: moment(0).subtract(4,'days').valueOf()
}, {
  id: '3',
  description: 'Office',
  note: '',
  amount: 14,
  createdAt: moment(0).add(4,'days').valueOf()
}];
test('Should filter by text value', () => {
  const filters = {
    text: 'l',
    sortBy: 'date',
    startDate:undefined,
    endDate:undefined
  }
  const result = filteredExpenses(allExpenses, filters);
  expect(result).toEqual([allExpenses[0]]);
});
test('Should filter by start date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate:moment(0),
    endDate:undefined
  }
  const result = filteredExpenses(allExpenses, filters);
  expect(result).toEqual([allExpenses[2],allExpenses[0]]);
});
test('Should filter by end date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate:undefined,
    endDate:moment(0)
  }
  const result = filteredExpenses(allExpenses, filters);
  expect(result).toEqual([allExpenses[0],allExpenses[1]]);
});
test('Should sort by date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate:undefined,
    endDate:undefined
  }
  const result = filteredExpenses(allExpenses, filters);
  expect(result).toEqual([allExpenses[2],allExpenses[0],allExpenses[1]]);
});
test('Should sort by amount', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate:undefined,
    endDate:undefined
  }
  const result = filteredExpenses(allExpenses, filters);
  expect(result).toEqual([allExpenses[0],allExpenses[1],allExpenses[2]]);
});