import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-zinc-900/70 text-white backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-4 sm:flex-row">
        <Link to="/" className="text-2xl font-bold tracking-tight">
          Sakura <span className="text-red-600">Sushi</span>
        </Link>
        <ul className="flex items-center gap-2 font-medium">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `rounded-lg px-4 py-2 transition ${
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-white/70 hover:text-white"
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cardapio"
              className={({ isActive }) =>
                `rounded-lg bg-red-600 px-4 py-2 transition hover:bg-red-700 ${
                  isActive ? "ring-2 ring-white/40" : ""
                }`
              }
            >
              Cardápio
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;