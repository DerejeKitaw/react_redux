import { editExpense } from '../../../store/actions/expense/editExpense';

test('Should setup edit expense action object', () => {
  const action = editExpense('123abc',{note:'New note value'});
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates:{note:'New note value'}
  });
});

