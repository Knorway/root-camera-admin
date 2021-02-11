export const toDatePickerFormat = (date, option = { new: false }) => {
  if (option.new) {
    return new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substring(0, 10);
  }

  return date?.toString().substring(0, 10);
};
