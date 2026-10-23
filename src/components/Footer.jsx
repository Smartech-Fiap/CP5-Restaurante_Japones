function Footer() {
  return (
    <footer className="bg-zinc-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-6 grid gap-6 sm:grid-cols-3 text-center sm:text-left">
        <div>
          <h3 className="font-bold text-red-600 mb-2">Endereço</h3>
          <p className="text-zinc-400">Av. Paulista, 1000 - São Paulo/SP</p>
        </div>
        <div>
          <h3 className="font-bold text-red-600 mb-2">Horário</h3>
          <p className="text-zinc-400">Ter a Dom: 11h às 23h</p>
        </div>
        <div>
          <h3 className="font-bold text-red-600 mb-2">Contato</h3>
          <p className="text-zinc-400">(11) 99701-9499</p>
        </div>
      </div>
      <p className="text-center mt-8 text-sm text-zinc-400">
        © 2026 Sakura Sushi. Todos os direitos reservados.
      </p>
    </footer>
  );
}

export default Footer;