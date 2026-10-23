import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-zinc-900/70 text-white backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-4 sm:flex-row">
        <Link to="/" className="text-2xl font-bold tracking-tight">
          Sakura <span className="text-red-600">Sushi</span>
        </Link>
        <ul className="flex items-center gap-6 font-medium">
          <li>
            <Link to="/" className="transition hover:text-red-600">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/cardapio"
              className="rounded-lg bg-red-600 px-4 py-2 transition hover:bg-red-700"
            >
              Cardápio
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;