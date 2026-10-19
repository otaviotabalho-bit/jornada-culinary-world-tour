import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, BookOpen, Utensils, Mail, Check, FileText, Layers, Leaf, Monitor, ChevronDown, ChefHat } from "lucide-react";
import hero from "@/assets/hero.jpg";
import f1 from "@/assets/food1.jpg";
import f2 from "@/assets/food2.jpg";
import f3 from "@/assets/food3.jpg";
import { WorldMap } from "@/components/WorldMap";

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

type Book = { title: string; country: string; chef: string; recipes: string; flag?: string; color: string; img: string };
const books: Book[] = [
  { title: "Itália à Mesa", country: "Itália", chef: "Cheff Otto", recipes: "48 receitas + 3 adaptações", flag: "it", color: "bg-olive", img: f1 },
  { title: "França à Mesa", country: "França", chef: "Érick Jacquin", recipes: "48 receitas", flag: "fr", color: "bg-wine", img: f3 },
  { title: "Líbano à Mesa", country: "Líbano", chef: "Leila Youssef", recipes: "48 receitas", flag: "lb", color: "bg-olive", img: f2 },
  { title: "Japão à Mesa", country: "Japão", chef: "Tsuyoshi Murakami e Jun Sakamoto", recipes: "48 receitas", flag: "jp", color: "bg-ink", img: f2 },
  { title: "Brasil à Mesa", country: "Brasil", chef: "Alex Atala", recipes: "48 receitas", flag: "br", color: "bg-pine", img: f3 },
  { title: "México à Mesa", country: "México", chef: "Luana Sabino e restaurante Metzi", recipes: "48 receitas", flag: "mx", color: "bg-wine", img: f3 },
  { title: "Índia à Mesa", country: "Índia", chef: "Alexandre Sharin", recipes: "36 receitas", flag: "in", color: "bg-brown", img: f2 },
  { title: "Espanha à Mesa", country: "Espanha", chef: "Óscar Bosch", recipes: "36 receitas", flag: "es", color: "bg-wine", img: f1 },
  { title: "África à Mesa", country: "Culinárias africanas", chef: "Rikler Makabu Sekelembe", recipes: "36 receitas", color: "bg-brown", img: f2 },
  { title: "Afro-Brasil à Mesa", country: "Tradição afro-brasileira", chef: "Kelma Zenaide", recipes: "36 receitas", color: "bg-pine", img: f2 },
  { title: "Argentina à Mesa", country: "Argentina", chef: "Francis Mallmann", recipes: "36 receitas", flag: "ar", color: "bg-ink", img: f3 },
  { title: "Estados Unidos à Mesa", country: "Estados Unidos", chef: "Anderson Lívio", recipes: "36 receitas", flag: "us", color: "bg-wine", img: f1 },
  { title: "Britain à Mesa", country: "Reino Unido", chef: "Heston Blumenthal", recipes: "36 receitas", flag: "gb", color: "bg-olive", img: f1 },
  { title: "Coreia à Mesa", country: "Coreia", chef: "João Son", recipes: "36 receitas", flag: "kr", color: "bg-wine", img: f2 },
  { title: "China à Mesa", country: "China", chef: "Jiang Pu", recipes: "36 receitas", flag: "cn", color: "bg-pine", img: f3 },
  { title: "Peru à Mesa — Volume I", country: "Peru", chef: "Enrique Paredes", recipes: "36 receitas", flag: "pe", color: "bg-brown", img: f3 },
];

const Flag = ({ code, className = "h-4 w-6" }: { code?: string | undefined; className?: string }) =>
  code ? <img src={`https://flagcdn.com/w40/${code}.png`} alt="" className={`${className} rounded-sm object-cover`} loading="lazy" /> : <span className={`${className} rounded-sm bg-primary/70`} />;

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <span className="grid h-12 w-12 place-items-center rounded-full border border-foreground/70"><Utensils className="h-5 w-5" /></span>
      <span className="font-serif text-xl leading-tight">Jornada Culinária<br /><span className="text-muted-foreground">pelo Mundo</span></span>
    </div>
  );
}

const faqs = [
  ["O que é a Jornada Culinária pelo Mundo?", "Uma coleção digital de 16 e-books em PDF com mais de 650 receitas."],
  ["Quantas receitas estão incluídas?", "648 receitas dos volumes originais + 3 adaptações em Itália à Mesa."],
  ["Os e-books são físicos?", "Não. É um produto digital em PDF."],
  ["Como recebo o produto?", "Você recebe os e-books por e-mail, prontos para abrir no celular, tablet ou computador."],
];

function Index() {
  const [open, setOpen] = useState<number | null>(null);
  const container = "mx-auto max-w-[1480px] px-6";
  return (
    <div className="bg-background text-foreground">
      <header className={`${container} flex items-center justify-between py-6`}>
        <Logo />
        <nav className="hidden gap-10 text-sm text-muted-foreground md:flex">
          <a href="#colecao">A coleção</a><a href="#faq">Perguntas frequentes</a>
        </nav>
        <a href="#oferta" className="flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-medium">Ver oferta <ArrowRight className="h-4 w-4" /></a>
      </header>

      <section className="relative overflow-hidden bg-forest text-forest-foreground">
        <img src={hero} alt="Tomates, azeite e manjericão" width={1600} height={704} className="absolute inset-0 h-full w-full object-cover object-right" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/70 to-transparent" />
        <div className="hero-map-scrim pointer-events-none absolute inset-0 hidden md:block" />
        <div className="pointer-events-none absolute inset-0 flex items-end justify-center overflow-hidden pb-6 opacity-45 md:items-center md:justify-end md:pb-0 md:pr-8 md:opacity-100">
          <WorldMap className="w-[78%] max-w-[820px] translate-y-2 text-accent/80 drop-shadow-[0_0_10px_oklch(0.72_0.11_75/0.35)] md:w-[58%]" />
        </div>
        <div className={`${container} relative py-10`}>
          <p className="eyebrow text-accent">Coleção digital · 16 e-books em PDF</p>
          <h1 className="mt-6 text-5xl leading-tight md:text-6xl">Jornada Culinária<br />pelo Mundo</h1>
          <p className="mt-4 font-serif text-2xl text-accent">Uma viagem que começa na sua cozinha.</p>
          <p className="mt-5 max-w-xl leading-relaxed">16 e-books e +650 receitas de 14 países, além de culinárias africanas e tradição afro-brasileira. Explore novos sabores na sua cozinha.</p>
          <div className="mt-5 flex gap-8 text-sm"><span className="flex items-center gap-2"><BookOpen className="h-4 w-4 text-accent" />16 e-books em PDF</span><span className="flex items-center gap-2"><Utensils className="h-4 w-4 text-accent" />+650 receitas</span></div>
          <p className="mt-4 flex items-center gap-2 text-sm"><Mail className="h-4 w-4 text-accent" />Produto digital, recebido por e-mail.</p>
          <div className="mt-6 flex items-baseline gap-4"><s className="text-sm">de R$ 89,00</s><span className="text-3xl font-semibold text-accent">por R$ 19,00</span><span className="text-sm">coleção completa</span></div>
          <a href="#colecao" className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground">Conhecer os 16 e-books <ArrowRight className="h-4 w-4" /></a>
          <p className="mt-4 text-sm">Compra temporariamente indisponível.</p>
          <p className="mt-4 text-xs opacity-80">Receitas organizadas por nível de dificuldade.</p>
          <div className="mt-6 flex justify-center gap-4 border-t border-dashed border-accent/40 pt-4">
            {books.filter((b) => b.flag).map((b) => (
              <span key={b.flag} className="grid h-9 w-9 place-items-center rounded-full bg-forest ring-1 ring-forest-foreground/20"><Flag code={b.flag} className="h-3.5 w-5" /></span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-card">
        <div className={`${container} grid grid-cols-2 py-8 md:grid-cols-4`}>
          {[["16", "e-books na coleção"], ["+650", "receitas para explorar"], ["14", "países à sua mesa"], ["PDF", "recebido por e-mail"]].map(([n, l], i) => (
            <div key={l} className={`text-center ${i ? "md:border-l border-border" : ""}`}><p className="font-serif text-4xl">{n}</p><p className="mt-2 text-sm text-muted-foreground">{l}</p></div>
          ))}
        </div>
      </section>

      <section id="colecao" className={`${container} py-24`}>
        <div className="text-center">
          <p className="eyebrow text-muted-foreground">Sua próxima descoberta está aqui</p>
          <h2 className="mt-6 text-5xl">Os 16 e-books da sua coleção</h2>
          <p className="mx-auto mt-6 max-w-3xl leading-loose text-muted-foreground">14 volumes sobre países, um sobre culinárias africanas e um sobre a tradição afro-brasileira.<br />Todos em PDF, para consultar na sua cozinha.</p>
        </div>
        <div className="mt-14 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {books.map((b) => (
            <article key={b.title} className="book-card">
              <div className={`${b.color} flex items-center gap-3 rounded-lg p-3 text-forest-foreground`}>
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-forest-foreground/15 ring-2 ring-primary/60"><ChefHat className="h-5 w-5" /></span>
                <div className="min-w-0 flex-1"><p className="truncate font-semibold">{b.chef}</p><p className="text-xs opacity-80">{b.country}</p></div>
                <Flag code={b.flag} className="h-5 w-8" />
              </div>
              <div className="mt-3 grid aspect-[4/4.2] place-items-center bg-card">
                <div className={`${b.color} book-cover w-[62%] overflow-hidden rounded-sm shadow-2xl text-center text-forest-foreground`}>
                  <p className="mt-4 text-[0.45rem] font-bold uppercase tracking-widest">Jornada culinária pelo mundo</p>
                  <p className="mt-3 px-2 font-serif text-xl leading-tight">{b.title}</p>
                  <p className="mt-4 text-[0.45rem] font-bold uppercase tracking-widest opacity-80">Com receitas de</p>
                  <p className="px-2 font-serif text-xs text-accent">{b.chef}</p>
                  <img src={b.img} alt="" loading="lazy" className="mt-3 aspect-[4/3] w-full object-cover" />
                  <p className="py-2 text-[0.4rem] font-bold uppercase tracking-widest">Uma coleção de sabores e tradições</p>
                </div>
              </div>
              <h3 className="mt-5 flex items-center gap-2 font-sans text-lg font-semibold">{b.flag && <Flag code={b.flag} />}{b.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.country}</p>
              <p className="eyebrow mt-2 text-muted-foreground">Com receitas de</p>
              <p className="font-serif text-sm text-muted-foreground">{b.chef}</p>
              <p className="mt-1 font-semibold">{b.recipes}</p>
            </article>
          ))}
        </div>
        <p className="mt-14 text-center text-sm leading-relaxed text-muted-foreground">+650 receitas = 648 receitas dos volumes originais incluídos + 3 adaptações adicionais em Itália à Mesa.<br />As imagens são composições culinárias ilustrativas, não uma lista de pratos incluídos nos e-books.</p>
        <button disabled className="mt-16 w-full rounded-md bg-primary/80 py-5 text-lg font-medium text-primary-foreground/70">Compra temporariamente indisponível</button>
        <p className="mt-6 text-center">As compras serão liberadas quando o pagamento estiver disponível.</p>
      </section>

      <section className="bg-card py-24">
        <div className={container}>
          <p className="eyebrow text-center text-muted-foreground">O que você recebe</p>
          <h2 className="mx-auto mt-6 max-w-2xl text-center text-5xl leading-tight">Uma coleção para consultar e explorar</h2>
          <div className="mt-14 grid gap-12 md:grid-cols-3">
            {[[FileText, "16 arquivos em PDF", "Uma coleção digital organizada em volumes por país ou tradição culinária."], [Layers, "Receitas por nível", "Organização por dificuldade para escolher o próximo desafio na cozinha."], [Leaf, "Orientações conforme o volume", "Técnicas, ingredientes e possíveis substituições no Brasil, quando presentes no e-book."]].map(([I, t, d]) => {
              const Icon = I as typeof FileText;
              return <div key={t as string} className="border-t border-border pt-7"><Icon className="h-7 w-7" /><h3 className="mt-6 font-sans text-lg font-semibold">{t as string}</h3><p className="mt-4 leading-loose text-muted-foreground">{d as string}</p></div>;
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card py-24">
        <div className={container}>
          <p className="eyebrow text-center text-muted-foreground">Repertório que inspira</p>
          <h2 className="mt-6 text-center text-5xl">Referências e inspirações culinárias</h2>
          <p className="mx-auto mt-6 max-w-2xl text-center leading-loose text-muted-foreground">Nomes e referências presentes em volumes específicos da coleção, sob uma perspectiva editorial.</p>
          <div className="mt-14 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-4">
            {books.map((b) => <div key={b.title} className="border-b border-border py-5"><p>{b.chef}</p><p className="mt-1 text-xs text-muted-foreground">{b.title}</p></div>)}
          </div>
          <div className="mt-12 space-y-4 border-l-2 border-accent pl-6 text-muted-foreground">
            <p>As receitas atribuídas a Cheff Otto são adaptações editoriais de receitas publicadas por ele e ajustadas para esta coleção.</p>
            <p>As menções a chefs e restaurantes indicam inspirações ou referências editoriais em volumes específicos. Não há afirmação de parceria, patrocínio ou endosso.</p>
          </div>
        </div>
      </section>

      <section className={`${container} grid gap-12 py-24 md:grid-cols-2`}>
        <div>
          <p className="eyebrow text-muted-foreground">Para quem tem curiosidade e apetite</p>
          <h2 className="mt-6 text-5xl leading-tight">Seu repertório merece<br />novos destinos.</h2>
          <p className="mt-6 leading-loose text-muted-foreground">Não é preciso sair de casa para conhecer um novo universo de sabores. É preciso vontade de experimentar.</p>
        </div>
        <ul className="space-y-10">
          {["Para quem tem curiosidade sobre as culinárias de diferentes lugares.", "Para quem gosta de cozinhar em casa e quer ampliar o repertório.", "Para quem prefere receitas com instruções organizadas por níveis.", "Para quem busca ideias para variar refeições e explorar ingredientes e técnicas."].map((t) => (
            <li key={t} className="flex gap-5"><Check className="h-5 w-5 shrink-0" />{t}</li>
          ))}
        </ul>
      </section>

      <section className="border-t border-border">
        <div className={`${container} py-24`}>
          <p className="eyebrow text-muted-foreground">Da coleção para a sua cozinha</p>
          <h2 className="mt-6 text-5xl">Como funciona</h2>
          <div className="mt-14 grid gap-12 md:grid-cols-2">
            <div className="flex gap-8"><span className="font-serif text-3xl text-muted-foreground">01</span><div><h3 className="font-sans text-lg font-semibold">Receba a coleção digital</h3><p className="mt-3 leading-loose text-muted-foreground">São 16 e-books em formato PDF — +650 receitas de culinárias diferentes, te ensinando tudo para experimentar os mais diversos sabores espalhados pelas culturas ao redor do mundo.</p></div></div>
            <div className="flex gap-8"><span className="font-serif text-3xl text-muted-foreground">02</span><div><h3 className="font-sans text-lg font-semibold">Como você recebe os e-books</h3><p className="mt-3 leading-loose text-muted-foreground">Você recebe os e-books por e-mail, prontos para abrir no celular, no tablet ou no computador.</p><p className="mt-4 flex items-center gap-3"><Monitor className="h-5 w-5" />Celular · Tablet · Computador</p></div></div>
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 pb-24">
        <h2 className="mb-8 text-center text-4xl">Perguntas frequentes</h2>
        {faqs.map(([q, a], i) => (
          <div key={q} className="border-b border-border">
            <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between py-5 text-left">{q}<ChevronDown className={`h-4 w-4 transition ${open === i ? "rotate-180" : ""}`} /></button>
            {open === i && <p className="pb-5 text-muted-foreground">{a}</p>}
          </div>
        ))}
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
