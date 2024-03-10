export function getMonth(inputDate) {
  const year = parseInt(inputDate.substring(0, 4));
  const month = parseInt(inputDate.substring(4, 6)) - 1;
  const day = parseInt(inputDate.substring(6, 8));

  const date = new Date(year, month, day);

  const monthName = new Intl.DateTimeFormat("uk-UK", { month: "long" }).format(
    date
  );
  return monthName;
}

export function getYear(inputDate) {
  const year = parseInt(inputDate.substring(0, 4));
  return year;
}
