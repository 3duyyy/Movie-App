export const currencyFormatter = (number, currency = "USD") => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
  });

  return formatter.format(number);
};
