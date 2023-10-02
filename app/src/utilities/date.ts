export const toLocalDateStringShort = (date: Date): string => {
  return new Date(date).toLocaleDateString([], {
    month: 'long',
    year: 'numeric',
  });
};
