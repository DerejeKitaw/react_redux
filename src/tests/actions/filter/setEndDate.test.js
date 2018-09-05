import moment from 'moment';
import { setEndDate } from '../../../store/actions/filter/setEndDate';

test('Should setup End Date action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});


