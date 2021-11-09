const { addMinutes } = require('date-fns');

module.exports = (date) => {
  return addMinutes(date, date.getTimezoneOffset());
};
