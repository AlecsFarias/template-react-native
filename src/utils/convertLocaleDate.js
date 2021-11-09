export default (date = '') => {
  const splitDate = date.split('/');
  return new Date(`${splitDate[2]}-${splitDate[1]}-${splitDate[0]}T00:00:00Z`);
};
