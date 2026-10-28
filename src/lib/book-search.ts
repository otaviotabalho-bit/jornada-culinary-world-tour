type SearchableBook = { title: string; country: string; chef: string };

const normalize = (value: string) =>
  value.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase();

export function matchesBookSearch(book: SearchableBook, query: string): boolean {
  const terms = normalize(query).match(/[\p{L}\p{N}]+/gu) ?? [];
  if (terms.length === 0) return false;
  const words = normalize(`${book.title} ${book.country} ${book.chef}`).match(/[\p{L}\p{N}]+/gu) ?? [];
  return terms.every((term) => words.some((word) => word.startsWith(term)));
}