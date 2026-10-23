// Recebe um prato e apresenta imagem, nome, descrição e preço.
const Card = ({ dish }) => {
  // Os preços do menu são números inteiros em reais.
  const price = `${dish.price},00 reais`

  return (
    // O grupo permite animar os detalhes quando o cursor passa pelo card.
    <article className="group overflow-hidden rounded-3xl bg-zinc-100 shadow-sm ring-1 ring-zinc-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-900/10 hover:ring-red-200 motion-reduce:transform-none motion-reduce:transition-none">
      <div className="relative aspect-[4/3] overflow-hidden bg-zinc-200">
        {/* A imagem aproxima e escurece levemente no hover. */}
        <img
          src={dish.image}
          alt={dish.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105 group-hover:brightness-90 motion-reduce:transform-none motion-reduce:transition-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* O selo é opcional e acompanha o hover do card. */}
        {dish.label && (
          <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold tracking-wide text-zinc-900 shadow-sm transition-colors duration-300 group-hover:bg-red-700 group-hover:text-white">
            {dish.label}
          </span>
        )}
      </div>

      {/* Nome e preço ficam juntos; a descrição completa o conteúdo. */}
      <div className="space-y-3 p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold tracking-tight text-zinc-900 transition-colors duration-200 group-hover:text-red-700">
            {dish.name}
          </h3>
          <p className="shrink-0 pt-1 text-sm font-semibold text-red-700 transition-colors duration-200 group-hover:text-red-600">
            {price}
          </p>
        </div>
        <p className="text-sm leading-6 text-zinc-600">{dish.description}</p>
      </div>
    </article>
  )
}

export default Card
