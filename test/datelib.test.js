const dateFormat = require('../datelib');

test('YYYY-MM-DD format to be correct', () => {
  const currentDate = new Date('2018-04-06');
  const date = new dateFormat(currentDate);
  expect(date.format('yyyy-MM-dd')).toBe('2018-04-06');
});