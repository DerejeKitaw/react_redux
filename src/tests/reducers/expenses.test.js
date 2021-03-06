import expensesReducer from '../../store/reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);

});
test('should not remove expenses if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);

});
test('should add expense', () => {
  const expenseData = {
    id:'109',
    description: 'Laptop',
    note: 'March bill',
    amount: 200,
    createdAt: 1000
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense: expenseData
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expenseData]);

});
test('should edit expense', () => {
  const amount = 333;
  const action = {
    type: 'EDIT_EXPENSE',
    id:expenses[1].id,
    updates: {amount}
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].amount).toBe(amount);

});
test('should not edit expense if expense not found', () => {
  const amount = 444;
  const action = {
    type: 'EDIT_EXPENSE',
    id:'-1',
    updates: {amount}
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);

});
