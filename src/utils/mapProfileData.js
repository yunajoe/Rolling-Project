export const mapProfileData = (person) => {
  if (!person) return {};

  const { profileImageURL, sender, relationship, content, createdAt } = person;
  return {
    profileImageURL,
    sender,
    relationship,
    content,
    createdAt,
  };
};
