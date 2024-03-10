import { getYear } from "./formatedDate";

export default function groupByCategoryYear(data) {
  const groupedByYearCategory = {};
  const totalByYear = {};
  for (const items of data) {
    const { dt, txt } = items;
    const year = getYear(dt);

    if (!groupedByYearCategory[txt]) groupedByYearCategory[txt] = {};
    groupedByYearCategory[txt][year] =
      (groupedByYearCategory[txt][year] || 0) + items.value;
    totalByYear[txt] = (totalByYear[txt] || 0) + items.value;
  }
  return groupedByYearCategory;
}
