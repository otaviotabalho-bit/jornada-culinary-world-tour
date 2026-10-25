import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Utensils, Mail, Check, FileText, Layers, Leaf, Monitor, ChefHat } from "lucide-react";
import hero from "@/assets/hero.jpg";
import f1 from "@/assets/food1.jpg";
import f2 from "@/assets/food2.jpg";
import f3 from "@/assets/food3.jpg";
import { Button } from "@/components/ui/button";
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
  const container = "mx-auto max-w-[1480px] px-4 sm:px-6";
  return (
    <div className="bg-background text-foreground">
      <header className={`${container} grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 py-3 sm:flex sm:justify-between sm:py-6`}>
        <Logo />
        <nav className="hidden gap-10 text-sm text-muted-foreground md:flex">
          <a href="#colecao">A coleção</a>
        </nav>
        <Button asChild variant="outline" className="shrink-0 sm:h-auto sm:px-5 sm:py-3"><a href="#oferta">Ver oferta <ArrowRight className="h-4 w-4" /></a></Button>
      </header>

      <section className="relative overflow-hidden bg-forest text-forest-foreground">
        <img src={hero} alt="Tomates, azeite e manjericão" width={1600} height={704} className="absolute inset-0 h-full w-full object-cover object-right" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/70 to-transparent" />
        <div className={`${container} hero-content relative py-7 sm:py-10`}>
          <p className="eyebrow text-accent">Coleção digital · 16 e-books em PDF</p>
          <h1 className="mt-4 text-4xl leading-tight sm:mt-6 sm:text-5xl md:text-6xl">Jornada Culinária<br />pelo Mundo</h1>
          <p className="mt-3 font-serif text-xl text-accent sm:mt-4 sm:text-2xl">Uma viagem que começa na sua cozinha.</p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed sm:mt-5 sm:text-base">16 e-books e +650 receitas de 14 países, além de culinárias africanas e tradição afro-brasileira. Explore novos sabores na sua cozinha.</p>
          <div className="mt-4 grid grid-cols-[minmax(0,1fr)_auto] gap-3 text-xs sm:mt-5 sm:flex sm:gap-8 sm:text-sm"><span className="flex min-w-0 items-center gap-2"><BookOpen className="h-4 w-4 shrink-0 text-accent" />16 e-books em PDF</span><span className="flex items-center gap-2"><Utensils className="h-4 w-4 shrink-0 text-accent" />+650 receitas</span></div>
          <p className="mt-4 flex items-center gap-2 text-sm"><Mail className="h-4 w-4 text-accent" />Produto digital, recebido por e-mail.</p>
          <Button asChild className="mt-5 h-auto w-full py-3 font-semibold sm:mt-7 sm:w-auto sm:px-8 sm:py-4"><a href="#colecao">Conhecer os 16 e-books <ArrowRight className="h-4 w-4" /></a></Button>
          <p className="mt-4 text-sm">Compra temporariamente indisponível.</p>
          <p className="mt-4 text-xs opacity-80">Receitas organizadas por nível de dificuldade.</p>
          <div className="mt-4 grid grid-cols-7 justify-items-center gap-2 border-t border-dashed border-accent/40 pt-3 sm:mt-6 sm:flex sm:justify-center sm:gap-4 sm:pt-4">
            {books.filter((b) => b.flag).map((b) => (
              <span key={b.flag} className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-forest ring-1 ring-forest-foreground/20 sm:h-9 sm:w-9"><Flag code={b.flag} className="h-3 w-4 sm:h-3.5 sm:w-5" /></span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-card">
        <div className={`${container} grid grid-cols-4 gap-2 py-4 sm:py-8`}>
          {[["16", "e-books na coleção"], ["+650", "receitas para explorar"], ["14", "países à sua mesa"], ["PDF", "recebido por e-mail"]].map(([n, l], i) => (
            <div key={l} className={`min-w-0 text-center ${i ? "border-l border-border" : ""}`}><p className="font-serif text-2xl sm:text-4xl">{n}</p><p className="mt-1 text-[0.65rem] leading-snug text-muted-foreground sm:mt-2 sm:text-sm">{l}</p></div>
          ))}
        </div>
      </section>

      <section id="colecao" className={`${container} collection-section py-9 sm:py-24`}>
        <div className="text-center">
          <p className="eyebrow text-muted-foreground">Sua próxima descoberta está aqui</p>
          <h2 className="mt-3 text-3xl sm:mt-6 sm:text-5xl">Os 16 e-books da sua coleção</h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:mt-6 sm:text-base sm:leading-loose">14 volumes sobre países, um sobre culinárias africanas e um sobre a tradição afro-brasileira.<br />Todos em PDF, para consultar na sua cozinha.</p>
        </div>
        <div className="book-grid mt-6 grid grid-cols-2 gap-x-3 gap-y-6 sm:mt-14 sm:gap-x-10 sm:gap-y-14 lg:grid-cols-4">
          {books.map((b) => (
            <article key={b.title} className="book-card min-w-0">
              <div className={`${b.color} chef-strip grid grid-cols-[auto_minmax(0,1fr)] items-center gap-2 rounded-lg p-2 text-forest-foreground sm:flex sm:gap-3 sm:p-3`}>
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

      <section id="oferta" className="bg-forest py-24 text-forest-foreground">
        <div className={`${container} grid gap-12 md:grid-cols-2`}>
          <div>
            <p className="eyebrow text-accent">Encontre seu próximo desafio dentro da cozinha!</p>
            <h2 className="mt-8 text-6xl leading-tight">Jornada Culinária<br />pelo Mundo</h2>
            <div className="mt-8 flex gap-8"><span className="flex items-center gap-2"><BookOpen className="h-5 w-5" />16 e-books</span><span className="flex items-center gap-2"><ChefHat className="h-5 w-5" />+650 receitas</span></div>
            <p className="mt-8 leading-loose opacity-85">Itália, França, Líbano, Japão, Brasil, México, Índia, Espanha, Argentina, Estados Unidos, Reino Unido, Coreia, China e Peru. Mais as culinárias africanas e a tradição afro-brasileira.</p>
          </div>
          <div className="border-t border-accent pt-8">
            <p className="eyebrow opacity-70">Coleção completa</p>
            <div className="mt-6 flex items-baseline gap-4"><s className="opacity-60">de R$ 89,00</s><span className="font-serif text-5xl text-accent">por R$ 19,00</span></div>
            <p className="mt-2 text-sm opacity-85">16 e-books em PDF, recebidos por e-mail.</p>
            <ul className="mt-6 space-y-4 text-sm">
              {["14 volumes sobre países", "Culinárias africanas e tradição afro-brasileira", "+650 receitas: 648 originais + 3 adaptações"].map((t) => <li key={t} className="flex gap-3"><Check className="h-4 w-4 text-accent" />{t}</li>)}
            </ul>
            <button disabled className="mt-8 w-full rounded-md bg-accent/70 py-5 text-lg font-medium text-forest">Compra temporariamente indisponível</button>
            <p className="mt-6 text-sm">As compras serão liberadas quando o pagamento estiver disponível.</p>
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
