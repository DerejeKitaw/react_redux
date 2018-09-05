import moment from 'moment';
import { sortByDate } from '../../../store/actions/filter/sortByDate';

test('Should setup End Date action object', () => {
  const action = sortByDate(moment(0));
  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  });
});