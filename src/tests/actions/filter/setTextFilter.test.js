import moment from 'moment';
import { setTextFilter } from '../../../store/actions/filter/setTextFilter';

test('Should setup Text Filter action object with text value', () => {
  const text = 'filter Text';
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text
  });
});
test('Should setup Text Filter action object with default value', () => {
  const text = '';
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text
  });
});


