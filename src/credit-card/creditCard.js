export const obscureCard = str => {
  if (!Number.isInteger(Number(str))) return "Enter numbers only";
  if (str.length < 12 || str.length > 16) return "Invalid Credit Card";

  const lastFour = str.slice(-4);
  const restOfCard = str.slice(0, -4);
  return "*".repeat(restOfCard.length) + lastFour;
};
