import { addExpense } from '../../../store/actions/expense/addExpense';

test('Should setup add expense action object with provided values', () => {
  const expenseData = {
    description: 'Rent',
    note: 'March bill',
    amount: 990,
    createdAt: 10000
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});
test('Should setup add expense action object with default values', () => {
  const expenseData = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0
  };
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});
