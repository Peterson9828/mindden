export default function calculateOffsetByPage(
  page: number,
  limit: number
): number {
  return (page - 1) * limit;
}
