function Footer() {
  return (
    <footer className="border-t-4 border-red-600 bg-zinc-900 py-12 text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 text-center sm:grid-cols-3 sm:text-left">
        <div>
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-red-600">
            Endereço
          </h3>
          <p className="text-sm leading-relaxed text-white/70">
            Av. Paulista, 1000 - São Paulo/SP
          </p>
        </div>
        <div>
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-red-600">
            Horário
          </h3>
          <p className="text-sm leading-relaxed text-white/70">
            Ter a Dom: 11h às 23h
          </p>
        </div>
        <div>
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-red-600">
            Contato
          </h3>
          <p className="text-sm leading-relaxed text-white/70">
            (11) 99701-9499
          </p>
        </div>
      </div>
      <p className="mt-10 text-center text-xs tracking-wide text-white/50">
        © 2026 Sakura Sushi. Todos os direitos reservados.
      </p>
    </footer>
  );
}

export default Footer;