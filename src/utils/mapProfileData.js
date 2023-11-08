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
