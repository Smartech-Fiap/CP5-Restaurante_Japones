const linkClass =
  "inline-block text-white/70 transition duration-200 hover:text-white active:scale-95 motion-reduce:transform-none motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600";

function Footer() {
  return (
    <footer className="border-t-4 border-red-600 bg-zinc-900 py-12 text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 text-center sm:grid-cols-3 sm:text-left">
        <div>
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-red-600">
            Endereço
          </h3>
          <p className="text-sm leading-relaxed">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Av.+Paulista,+1000,+São+Paulo"
              target="_blank"
              rel="noreferrer"
              className={linkClass}
            >
              Av. Paulista, 1000 - São Paulo/SP
            </a>
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
          <p className="text-sm leading-relaxed">
            <a href="tel:+5511997019499" className={linkClass}>
              (11) 99701-9499
            </a>
          </p>
        </div>
      </div>
        <p className="mx-auto mt-10 max-w-6xl border-t border-white/10 px-6 pt-6 text-center text-xs tracking-wide text-white/50">
        © 2026 Sakura Sushi. Todos os direitos reservados.
      </p>
    </footer>
  );
}

export default Footer;