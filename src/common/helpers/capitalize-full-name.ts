export const capitalizeFullName = (fullName: string) => {
  if (!fullName) return '';
  return fullName
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};
