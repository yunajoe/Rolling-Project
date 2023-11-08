export const convertDateFormat = (date) => {
  const writtenDate = new Date(date);
  const year = writtenDate.getFullYear();
  const month = writtenDate.getMonth() + 1;
  const day = writtenDate.getDate();
  return {
    year,
    month,
    day,
  };
};
