import moment from 'moment';
import { setStartDate } from '../../../store/actions/filter/setStartDate';

test('Should setup Start Date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});


