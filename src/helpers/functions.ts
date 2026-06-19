export const formatUSPhoneNumber = (value: string) => {
  const onlyNumbers = value.replace(/\D/g, "").slice(0, 10);

  if (onlyNumbers.length <= 3) {
    return onlyNumbers;
  }

  if (onlyNumbers.length <= 6) {
    return `(${onlyNumbers.slice(0, 3)}) ${onlyNumbers.slice(3)}`;
  }

  return `(${onlyNumbers.slice(0, 3)}) ${onlyNumbers.slice(
    3,
    6,
  )}-${onlyNumbers.slice(6)}`;
};
