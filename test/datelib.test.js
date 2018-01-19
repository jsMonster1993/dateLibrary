const dateFormat = require('../datelib');

test('YYYY-MM-DD format to be correct', () => {
  const currentDate = new Date("2018-01-19 12:37:31");
  const date = new dateFormat(currentDate);
  expect(date.format('yyyy-MM-dd')).toBe('2018-01-19');
  expect(date.format('DD dd MMMM yyyy')).toBe('Fri 19 January 2018');
  expect(date.format('DD dd MMM yyyy')).toBe('Fri 19 Jan 2018');
  expect(date.format('DD dd MMM yy')).toBe('Fri 19 Jan 18');
  expect(date.format('yyyy-MM-dd')).toBe('2018-01-19');
  expect(date.format('yyyy-MM-dd hh:mm:ss')).toBe('2018-01-19 12:37:31');
  expect(date.format('yyyy-MM-dd h:mm:ss')).toBe('2018-01-19 12:37:31');
  expect(date.format('yyyy-MM-dd h:m:ss')).toBe('2018-01-19 12:37:31');
  expect(date.format('yyyy-MM-dd h:m:s')).toBe('2018-01-19 12:37:31');
});