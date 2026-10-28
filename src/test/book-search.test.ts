import { describe, expect, it } from "vitest";
import { matchesBookSearch } from "@/lib/book-search";

describe("Book search", () => {
  it("finds Heston for h, not internal h in Cheff, Sharin or Espanha", () => {
    const candidates = [
      { title: "Itália à Mesa", country: "Itália", chef: "Cheff Otto" },
      { title: "Índia à Mesa", country: "Índia", chef: "Alexandre Sharin" },
      { title: "Espanha à Mesa", country: "Espanha", chef: "Óscar Bosch" },
      { title: "Britain à Mesa", country: "Reino Unido", chef: "Heston Blumenthal" },
    ];
    expect(candidates.filter((book) => matchesBookSearch(book, "h")).map((book) => book.chef)).toEqual(["Heston Blumenthal"]);
  });

  it("matches accented country names without requiring accents or case", () => {
    expect(matchesBookSearch({ title: "Japão à Mesa", country: "Japão", chef: "Jun Sakamoto" }, " JAPAO ")).toBe(true);
  });

  it("requires every query word to match", () => {
    const book = { title: "Britain à Mesa", country: "Reino Unido", chef: "Heston Blumenthal" };
    expect(matchesBookSearch(book, "heston blu")).toBe(true);
    expect(matchesBookSearch(book, "heston jacquin")).toBe(false);
  });
});