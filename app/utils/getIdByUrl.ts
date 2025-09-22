export default function idByUrl(url: string): number {
  const match = url.match(/(\d+)\/?$/);
  const id = match ? match[1] : null;
  return Number(id);
}
