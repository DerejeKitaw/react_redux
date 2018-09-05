import moment from 'moment';
import { sortByAmount } from '../../../store/actions/filter/sortByAmount';

test('Should setup End Date action object', () => {
  const action = sortByAmount(moment(0));
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT'
  });
});