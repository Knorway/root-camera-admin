const toDatePickerFormat = (date, option = { new: false }) => {
  if (option.new) {
    return new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substring(0, 10);
  }

  return date?.toString().substring(0, 10);
};

const isEmpty = (param, option) => {
  if (Array.isArray(option)) {
    return Object.keys(param).length === 0;
  }

  return Object.keys(param).length === 0 && param.constructor === Object;
};

const getInitials = (name = '') => {
  return name
    .replace(/\s+/, ' ')
    .split(' ')
    .slice(0, 2)
    .map((v) => v && v[0].toUpperCase())
    .join('');
};

export { isEmpty, getInitials, toDatePickerFormat };
