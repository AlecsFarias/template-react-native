export default {
  unmask: (string = '') => string.replace(/\D/g, ''),
  cpf: (string = '') =>
    string
      .replace(/\D/g, '') // Replace any non-number character for nothing
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1'),
  rg: (string = '') =>
    string
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{1})\d+?$/, '$1'),
  cnpj: (string = '') =>
    string
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1/$2')
      .replace(/(\d{4})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1'),
  zip_code: (string = '') =>
    string
      .replace(/\D/g, '')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{3})\d+?$/, '$1'),
  phone: (string = '') =>
    string
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(-\d{4})(\d)/, '$1'),
  cellphone: (string = '') =>
    string
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{4})\d+?$/, '$1'),
  date: (string = '') =>
    string
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '$1/$2')
      .replace(/(\d{2})(\d)/, '$1/$2')
      .replace(/(\d{4})(\d)/, '$1'),
  time: (string = '') =>
    string
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '$1:$2')
      .replace(/(\d{2})(\d)/, '$1'),
  currency: (value = '') => {
    const string = value.toString();

    if (string.replace(/\D/g, '') !== '') {
      const [currency, cents] = (string.replace(/\D/g, '') / 100)
        .toFixed(2)
        .toString()
        .split('.');

      return `${currency.replace(/\B(?=(\d{3})+(?!\d))/g, '.')},${cents}`;
    }
    return '0,00';
  },
  currencyAllPlatforms: (value) => {
    if (typeof value === 'number') {
      const [currency, cents] = (value / 100).toFixed(2).toString().split('.');

      return `${currency.replace(/\B(?=(\d{3})+(?!\d))/g, '.')},${cents}`;
    }

    return '0,00';
  },
  creditOrDebitCard: (string = '') =>
    string
      .replace(/\D/g, '') // Replace any non-number character for nothing
      .replace(/(\d{4})(\d)/, '$1 $2')
      .replace(/(\d{4})(\d)/, '$1 $2')
      .replace(/(\d{4})(\d)/, '$1 $2')
      .replace(/(.\d{4})\d+?$/, '$1'),
  creditOrDebitCardExpiry: (string = '') =>
    string
      .replace(/\D/g, '') // Replace any non-number character for nothing
      .replace(/(\d{2})(\d)/, '$1/$2')
      .replace(/(.\d{2})\d+?$/, '$1'),

  creditOrDebitCardCvv: (string = '') =>
    string.replace(/\D/g, '').replace(/(.\d{2})\d+?$/, '$1'),
};
