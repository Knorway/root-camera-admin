const isEmpty = (param, option) => {
  if (Array.isArray(option)) {
    return Object.keys(param).length === 0;
  }

  return Object.keys(param).length === 0 && param.constructor === Object;
};

export default isEmpty;
