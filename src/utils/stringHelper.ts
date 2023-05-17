export const removeSpacesAndAccents = (string: string) => {
  const withoutSpaces = string.replace(/\s/g, "-");
  const withoutAccents = withoutSpaces
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  return withoutAccents.toLowerCase();
};
