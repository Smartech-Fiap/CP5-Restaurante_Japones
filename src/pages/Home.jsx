import { Link } from "react-router-dom"

const destaques = [
  {
    titulo: "Sushi variado",
    descricao: "Uma seleção de sabores para aproveitar cada momento.",
    imagem:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=900&q=85",
    alt: "Seleção de sushi servida em uma travessa",
  },
  {
    titulo: "Sashimi fresco",
    descricao: "Cortes delicados preparados para valorizar cada ingrediente.",
    imagem:
      "https://images.unsplash.com/photo-1534482421-64566f976cfa?auto=format&fit=crop&w=900&q=85",
    alt: "Sashimi servido com acompanhamentos",
  },
  {
    titulo: "Combinados especiais",
    descricao: "Uma combinação especial para compartilhar à mesa.",
    imagem:
      "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=900&q=85",
    alt: "Combinado japonês servido à mesa",
  },
]

function Home() {
  return (
    <div className="bg-white text-zinc-900">
      <section className="overflow-hidden bg-zinc-900 text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 sm:py-20 lg:grid-cols-2 lg:py-24">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-300">
              <span className="h-2 w-2 rounded-full bg-red-600" />
              Uma experiência especial
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Tradição japonesa,
              <span className="text-red-600"> sabor inesquecível.</span>
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-8 text-zinc-400">
              Descubra sabores preparados com cuidado e aproveite bons momentos
              à mesa com a Sakura Sushi.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/cardapio"
                className="rounded-lg bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
              >
                Explorar cardápio
              </Link>
              <a
                href="#destaques"
                className="rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-red-600 hover:text-red-500"
              >
                Conheça os destaques
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -right-5 -top-5 h-32 w-32 rounded-full bg-red-600/20 blur-2xl" />
            <img
              src="https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&w=1400&q=90"
              alt="Seleção de sushi preparada para compartilhar"
              className="relative h-72 w-full rounded-2xl object-cover shadow-2xl sm:h-96"
            />
            <div className="absolute -bottom-5 left-4 rounded-xl border border-white/10 bg-zinc-900 px-5 py-4 shadow-xl sm:left-8">
              <p className="text-sm text-zinc-400">Feito para aproveitar</p>
              <p className="mt-1 font-semibold text-white">
                Bons momentos começam à mesa
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="destaques" className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-semibold uppercase tracking-[0.18em] text-red-600">
              Sakura Sushi
            </p>
            <h2 className="mt-2 text-3xl font-bold text-zinc-900 sm:text-4xl">
              Sabores para descobrir
            </h2>
          </div>
          <p className="max-w-md leading-7 text-zinc-600">
            Uma seleção inspirada na culinária japonesa, com opções para
            diferentes gostos e ocasiões.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destaques.map((item) => (
            <article
              key={item.titulo}
              className="overflow-hidden rounded-2xl border border-zinc-100 bg-zinc-100 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <img
                src={item.imagem}
                alt={item.alt}
                className="h-56 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-zinc-900">
                  {item.titulo}
                </h3>
                <p className="mt-2 leading-7 text-zinc-600">
                  {item.descricao}
                </p>
                <Link
                  to="/cardapio"
                  className="mt-5 inline-flex items-center gap-2 font-semibold text-red-600 transition hover:text-red-700"
                >
                  Ver cardápio <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-zinc-100">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-12 sm:flex-row sm:items-center sm:py-14">
          <div>
            <p className="font-semibold text-red-600">Seu próximo momento especial</p>
            <h2 className="mt-2 text-2xl font-bold text-zinc-900 sm:text-3xl">
              Escolha seus favoritos no cardápio.
            </h2>
          </div>
          <Link
            to="/cardapio"
            className="shrink-0 rounded-lg bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
          >
            Acessar cardápio
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
