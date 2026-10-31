import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, BookOpen, Utensils, Check, ChefHat, Search, Smartphone, Zap } from "lucide-react";
import hero from "@/assets/hero.jpg";
import f1 from "@/assets/food1.jpg";
import f2 from "@/assets/food2.jpg";
import f3 from "@/assets/food3.jpg";
import { Button } from "@/components/ui/button";
import { matchesBookSearch } from "@/lib/book-search";
import cheffOtto from "@/assets/chefs/cheff-otto.jpg.asset.json";
import erickJacquin from "@/assets/chefs/erick-jacquin.jpg.asset.json";
import leilaYoussef from "@/assets/chefs/leila-youssef.jpg.asset.json";
import junSakamoto from "@/assets/chefs/jun-sakamoto.jpg.asset.json";
import alexAtala from "@/assets/chefs/alex-atala.jpg.asset.json";
import luanaSabino from "@/assets/chefs/luana-sabino.jpg.asset.json";
import alexandreSharin from "@/assets/chefs/alexandre-sharin.jpg.asset.json";
import oscarBosch from "@/assets/chefs/oscar-bosch.jpg.asset.json";
import riklerMakabu from "@/assets/chefs/rikler-makabu.jpg.asset.json";
import kelmaZenaide from "@/assets/chefs/kelma-zenaide.jpg.asset.json";
import francisMallmann from "@/assets/chefs/francis-mallmann.jpg.asset.json";
import andersonLivio from "@/assets/chefs/anderson-livio.jpg.asset.json";
import hestonBlumenthal from "@/assets/chefs/heston-blumenthal.jpg.asset.json";
import jiangPu from "@/assets/chefs/jiang-pu.jpg.asset.json";
import enriqueParedes from "@/assets/chefs/enrique-paredes.jpg.asset.json";
import joaoSon from "@/assets/chefs/joao-son.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jornada Culinária pelo Mundo — 16 e-books em PDF" },
      { name: "description", content: "16 e-books e +650 receitas de 14 países, culinárias africanas e tradição afro-brasileira." },
      { property: "og:title", content: "Jornada Culinária pelo Mundo" },
      { property: "og:description", content: "Uma viagem que começa na sua cozinha. 16 e-books por R$ 19,00." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Book = { title: string; country: string; chef: string; recipes: string; flag?: string; color: string; img: string; chefImg?: string; chefPos?: string };
const books: Book[] = [
  { title: "Itália à Mesa", country: "Itália", chef: "Cheff Otto", recipes: "48 receitas + 3 adaptações", flag: "it", color: "bg-olive", img: f1, chefImg: cheffOtto.url, chefPos: "object-top" },
  { title: "França à Mesa", country: "França", chef: "Érick Jacquin", recipes: "48 receitas", flag: "fr", color: "bg-wine", img: f3, chefImg: erickJacquin.url },
  { title: "Líbano à Mesa", country: "Líbano", chef: "Leila Youssef", recipes: "48 receitas", flag: "lb", color: "bg-olive", img: f2, chefImg: leilaYoussef.url },
  { title: "Japão à Mesa", country: "Japão", chef: "Tsuyoshi Murakami e Jun Sakamoto", recipes: "48 receitas", flag: "jp", color: "bg-ink", img: f2, chefImg: junSakamoto.url },
  { title: "Brasil à Mesa", country: "Brasil", chef: "Alex Atala", recipes: "48 receitas", flag: "br", color: "bg-pine", img: f3, chefImg: alexAtala.url },
  { title: "México à Mesa", country: "México", chef: "Luana Sabino e restaurante Metzi", recipes: "48 receitas", flag: "mx", color: "bg-wine", img: f3, chefImg: luanaSabino.url },
  { title: "Índia à Mesa", country: "Índia", chef: "Alexandre Sharin", recipes: "36 receitas", flag: "in", color: "bg-brown", img: f2, chefImg: alexandreSharin.url },
  { title: "Espanha à Mesa", country: "Espanha", chef: "Óscar Bosch", recipes: "36 receitas", flag: "es", color: "bg-wine", img: f1, chefImg: oscarBosch.url },
  { title: "África à Mesa", country: "Culinárias africanas", chef: "Rikler Makabu Sekelembe", recipes: "36 receitas", color: "bg-brown", img: f2, chefImg: riklerMakabu.url },
  { title: "Afro-Brasil à Mesa", country: "Tradição afro-brasileira", chef: "Kelma Zenaide", recipes: "36 receitas", color: "bg-pine", img: f2, chefImg: kelmaZenaide.url },
  { title: "Argentina à Mesa", country: "Argentina", chef: "Francis Mallmann", recipes: "36 receitas", flag: "ar", color: "bg-ink", img: f3, chefImg: francisMallmann.url },
  { title: "Estados Unidos à Mesa", country: "Estados Unidos", chef: "Anderson Lívio", recipes: "36 receitas", flag: "us", color: "bg-wine", img: f1, chefImg: andersonLivio.url },
  { title: "Britain à Mesa", country: "Reino Unido", chef: "Heston Blumenthal", recipes: "36 receitas", flag: "gb", color: "bg-olive", img: f1, chefImg: hestonBlumenthal.url },
  { title: "Coreia à Mesa", country: "Coreia", chef: "João Son", recipes: "36 receitas", flag: "kr", color: "bg-wine", img: f2, chefImg: joaoSon.url },
  { title: "China à Mesa", country: "China", chef: "Jiang Pu", recipes: "36 receitas", flag: "cn", color: "bg-pine", img: f3, chefImg: jiangPu.url },
  { title: "Peru à Mesa — Volume I", country: "Peru", chef: "Enrique Paredes", recipes: "36 receitas", flag: "pe", color: "bg-brown", img: f3, chefImg: enriqueParedes.url },
];

const Flag = ({ code, className = "h-4 w-6" }: { code?: string | undefined; className?: string }) =>
  code ? <img src={`https://flagcdn.com/w40/${code}.png`} alt="" className={`${className} rounded-sm object-cover`} loading="lazy" /> : <span className={`${className} rounded-sm bg-primary/70`} />;

function Logo() {
  return (
    <div className="flex min-w-0 items-center gap-2 sm:gap-3">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-foreground/70 sm:h-12 sm:w-12"><Utensils className="h-4 w-4 sm:h-5 sm:w-5" /></span>
      <span className="min-w-0 font-serif text-sm leading-tight sm:text-xl">Jornada Culinária<br /><span className="text-muted-foreground">pelo Mundo</span></span>
    </div>
  );
}

function Index() {
  const [bookSearch, setBookSearch] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  const matchingBooks = books.filter((book) => matchesBookSearch(book, bookSearch)).slice(0, 6);
  const container = "mx-auto max-w-[1480px] px-4 sm:px-6";
  return (
    <div className="bg-background text-foreground">
      <section className="landing-hero relative z-10">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="landing-leaf landing-leaf-left">✦</div>
          <div className="landing-leaf landing-leaf-right">✦</div>
        </div>
        <div className="landing-inner mx-auto flex max-w-4xl flex-col items-center px-5 pb-5 pt-5 text-center sm:px-8 sm:pt-6">
          <div className="landing-food-photo relative mb-4">
            <img src={f1} alt="Prato preparado com cuidado em uma cozinha" className="h-full w-full rounded-full object-cover" />
            <span className="landing-check"><Check className="h-8 w-8" strokeWidth={3} /></span>
          </div>
          <p className="landing-eyebrow flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.18em] sm:gap-5 sm:text-sm">
            <span className="h-px w-12 bg-accent sm:w-20" />
            Coleção digital · 16 e-books em PDF
            <span className="h-px w-12 bg-accent sm:w-20" />
          </p>
          <h1 className="landing-title mt-3 font-serif font-bold leading-[0.94]">
            <span className="block">Jornada Culinária</span>
            <span className="landing-script block">pelo Mundo</span>
          </h1>
          <p className="mt-4 font-serif text-lg font-semibold leading-snug sm:mt-5 sm:text-2xl">Uma viagem que começa na sua cozinha.</p>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:mt-3 sm:text-base sm:leading-relaxed">
            16 e-books e +650 receitas de 14 países, além de culinárias africanas e tradição afro-brasileira. Explore novos sabores na sua cozinha.
          </p>
          <div className="mt-4 grid w-full max-w-3xl grid-cols-3 gap-2 sm:mt-5 sm:gap-4">
            <div className="landing-benefit"><span className="landing-benefit-icon"><Zap className="h-6 w-6 sm:h-8 sm:w-8" /></span><span>Acesso<br />imediato</span></div>
            <div className="landing-benefit"><span className="landing-benefit-icon"><Smartphone className="h-6 w-6 sm:h-8 sm:w-8" /></span><span>Receba no<br />seu celular</span></div>
            <div className="landing-benefit"><span className="landing-benefit-icon"><BookOpen className="h-6 w-6 sm:h-8 sm:w-8" /></span><span>Milhares<br />de receitas</span></div>
          </div>
          <div className="relative mt-4 w-full max-w-3xl sm:mt-5">
            <div className="landing-collection-link flex w-full items-center gap-3 rounded-full px-4 py-3 text-left sm:px-7 sm:py-4">
              <Search className="h-7 w-7 shrink-0 sm:h-8 sm:w-8" />
              <span className="h-8 w-px shrink-0 bg-border sm:h-10" />
              <input
                type="search"
                value={bookSearch}
                onChange={(event) => setBookSearch(event.target.value)}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                onKeyDown={(event) => {
                  const firstMatch = matchingBooks[0];
                  if (event.key === "Enter" && firstMatch) {
                    window.location.hash = `ebook-${books.indexOf(firstMatch)}`;
                    setSearchFocused(false);
                  }
                  if (event.key === "Escape") setSearchFocused(false);
                }}
                placeholder="Pesquise por chef ou país..."
                aria-label="Pesquisar e-books por chef ou país"
                aria-autocomplete="list"
                className="min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-muted-foreground sm:text-xl"
              />
              {bookSearch ? <button type="button" aria-label="Limpar pesquisa" onMouseDown={(event) => event.preventDefault()} onClick={() => setBookSearch("")} className="shrink-0 text-muted-foreground hover:text-foreground">×</button> : <ArrowRight className="h-7 w-7 shrink-0 sm:h-8 sm:w-8" />}
            </div>
            {searchFocused && bookSearch.trim() && (
              <div className="absolute left-0 right-0 top-full z-50 mt-2 max-h-72 overflow-y-auto overscroll-contain rounded-lg border border-border bg-background text-left shadow-xl" role="listbox" aria-label="Resultados da pesquisa">
                {matchingBooks.length > 0 ? matchingBooks.map((book) => (
                  <a
                    key={book.title}
                    href={`#ebook-${books.indexOf(book)}`}
                    onMouseDown={(event) => event.preventDefault()}
                    onClick={() => { setBookSearch(""); setSearchFocused(false); }}
                    className="flex items-center justify-between gap-3 border-b border-border/70 px-4 py-3 last:border-0 hover:bg-muted sm:px-5"
                    role="option"
                  >
                    <span className="min-w-0">
                      <span className="block truncate font-semibold">{book.title}</span>
                      <span className="block truncate text-sm text-muted-foreground">{book.country} · {book.chef}</span>
                    </span>
                    <ArrowRight className="h-4 w-4 shrink-0" />
                  </a>
                )) : <p className="px-4 py-3 text-sm text-muted-foreground">Nenhum e-book encontrado. Tente outro país ou chef.</p>}
              </div>
            )}
          </div>
          <div className="landing-flags mt-4 grid grid-cols-7 justify-items-center gap-x-2 gap-y-2 sm:mt-5 sm:gap-x-4 sm:gap-y-3">
            {books.filter((b) => b.flag).map((b) => (
              <span key={b.flag} title={b.country} className="landing-flag"><img src={`https://flagcdn.com/w80/${b.flag}.png`} alt={b.country} loading="lazy" /></span>
            ))}
          </div>
          <div className="landing-ornament mt-4 w-full max-w-2xl sm:mt-5" />
        </div>
      </section>

      <section id="colecao" className={`${container} collection-section py-7 sm:py-16`}>
        <div className="text-center">
          <p className="eyebrow text-muted-foreground">Sua próxima descoberta está aqui</p>
          <h2 className="mt-3 text-3xl sm:mt-6 sm:text-5xl">Os 16 e-books da sua coleção</h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:mt-6 sm:text-base sm:leading-loose">14 volumes sobre países, um sobre culinárias africanas e um sobre a tradição afro-brasileira.<br />Todos em PDF, para consultar na sua cozinha.</p>
        </div>
        <div className="book-grid mt-6 grid grid-cols-2 gap-x-3 gap-y-6 sm:mt-14 sm:gap-x-10 sm:gap-y-14 lg:grid-cols-4">
          {books.map((b) => (
            <article id={`ebook-${books.indexOf(b)}`} key={b.title} className="book-card min-w-0 scroll-mt-6">
              <div className={`${b.color} chef-strip grid min-h-[76px] grid-cols-[auto_minmax(0,1fr)] items-center gap-2 rounded-lg p-3 text-forest-foreground sm:flex sm:min-h-[88px] sm:gap-3 sm:p-4`}>
                {b.chefImg ? <img src={b.chefImg} alt={b.chef} loading="lazy" className={`h-12 w-12 shrink-0 rounded-full object-cover ${b.chefPos ?? "object-center"} ring-2 ring-primary/60`} /> : <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-forest-foreground/15 ring-2 ring-primary/60"><ChefHat className="h-5 w-5" /></span>}
                <div className="min-w-0 flex-1"><p className="break-words text-xs font-semibold leading-snug sm:truncate sm:text-base">{b.chef}</p><p className="hidden text-xs opacity-80 sm:block">{b.country}</p></div>
                <Flag code={b.flag} className="hidden h-5 w-8 shrink-0 sm:block" />
              </div>
              <div className="cover-stage mt-2 grid aspect-[4/4.2] place-items-center bg-card sm:mt-3">
                <div className={`${b.color} book-cover w-[62%] overflow-hidden rounded-sm shadow-2xl text-center text-forest-foreground`}>
                  <p className="mt-4 text-[0.45rem] font-bold uppercase tracking-widest">Jornada culinária pelo mundo</p>
                  <p className="mt-3 px-2 font-serif text-xl leading-tight">{b.title}</p>
                  <p className="mt-4 text-[0.45rem] font-bold uppercase tracking-widest opacity-80">Com receitas de</p>
                  <p className="px-2 font-serif text-xs text-accent">{b.chef}</p>
                  <img src={b.img} alt="" loading="lazy" className="mt-3 aspect-[4/3] w-full object-cover" />
                  <p className="py-2 text-[0.4rem] font-bold uppercase tracking-widest">Uma coleção de sabores e tradições</p>
                </div>
              </div>
              <h3 className="mt-3 flex items-start gap-1.5 font-sans text-sm font-semibold leading-snug sm:mt-5 sm:items-center sm:gap-2 sm:text-lg">{b.flag && <Flag code={b.flag} className="mt-0.5 h-3 w-4 shrink-0 sm:mt-0 sm:h-4 sm:w-6" />}{b.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground sm:mt-2 sm:text-sm">{b.country}</p>
              <p className="eyebrow mt-2 hidden text-muted-foreground sm:block">Com receitas de</p>
              <p className="hidden font-serif text-sm text-muted-foreground sm:block">{b.chef}</p>
              <p className="mt-1 text-xs font-semibold sm:text-base">{b.recipes}</p>
            </article>
          ))}
        </div>

      </section>

      <section id="oferta" className="offer-section bg-forest px-4 py-14 text-forest-foreground sm:px-6 sm:py-20">
        <div className="mx-auto max-w-2xl">
          <div className="offer-card relative overflow-hidden rounded-[1.75rem] border border-accent/70 bg-background px-5 pb-7 pt-7 text-foreground shadow-2xl sm:px-10 sm:pb-9 sm:pt-9">
            <div className="offer-topline absolute inset-x-0 top-0 h-2 bg-accent" />
            <div className="flex justify-center">
              <span className="rounded-full bg-forest px-5 py-2 text-xs font-bold uppercase tracking-wide text-forest-foreground sm:text-sm">✦ Coleção completa</span>
            </div>
            <div className="mt-5 text-center">
              <span className="inline-flex rounded-full bg-accent/20 px-5 py-2 text-sm font-bold text-foreground">✦ Jornada Culinária pelo Mundo</span>
              <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-forest sm:text-4xl">16 e-books digitais em PDF</h2>
              <p className="mt-2 text-base font-semibold text-forest sm:text-lg">Mais de 650 receitas para explorar novos sabores</p>
            </div>
            <ul className="offer-benefits mt-6 space-y-3 text-sm sm:text-base">
              {[
                "14 volumes inspirados nas cozinhas de diferentes países",
                "Acesso vitalício à coleção completa",
                "Arquivos digitais em PDF para consultar quando quiser",
                "Coleção recebida por e-mail após a liberação da compra",
              ].map((item) => <li key={item} className="flex items-start gap-3"><span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-emerald-600 text-white"><Check className="h-4 w-4" strokeWidth={3} /></span><span>{item}</span></li>)}
            </ul>
            <div className="my-6 border-t border-border" />
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent-foreground">Oferta da coleção completa</p>
              <div className="mt-3 flex flex-wrap items-baseline justify-center gap-x-3 gap-y-1">
                <s className="text-base text-muted-foreground">De R$ 89,00</s>
                <span className="text-sm text-muted-foreground">por apenas</span>
              </div>
              <p className="offer-price mt-1 font-serif text-6xl font-bold leading-none text-emerald-600 sm:text-7xl">R$ 18,99</p>
              <p className="mt-3 text-sm text-muted-foreground">Pagamento e liberação da compra ainda indisponíveis.</p>
            </div>
            <button disabled className="purchase-glow mt-6 w-full cursor-not-allowed rounded-xl bg-emerald-600/75 px-4 py-4 text-base font-bold text-white opacity-90 sm:py-5 sm:text-lg">Compra temporariamente indisponível</button>
            <p className="mt-4 text-center text-xs leading-relaxed text-muted-foreground">Quando a compra estiver disponível, a coleção será enviada em formato digital para o e-mail informado.</p>
          </div>
        </div>
      </section>

      <footer className={`${container} flex items-center justify-between py-10`}>
        <Logo />
        <p className="text-right text-xs text-muted-foreground">Uma coleção de sabores<br />e tradições culinárias.</p>
      </footer>
    </div>
  );
}
