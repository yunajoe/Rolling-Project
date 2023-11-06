export const mapProfileData = (person) => {
  if (!person) return {};

  const { id, profileImageURL, sender, relationship, content, createdAt } =
    person;
  return {
    id,
    profileImageURL,
    sender,
    relationship,
    content,
    createdAt,
  };
};

export const ConvertDateFormat = (date) => {
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
