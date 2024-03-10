export default function groupByCategory(data) {
  const totalByCategory = {};

  for (const items of data) {
    const { txt } = items;
    totalByCategory[txt] = (totalByCategory[txt] || 0) + items.value;
  }
  return totalByCategory;
}
