import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-zinc-900 text-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="text-2xl font-bold">
          Sakura <span className="text-red-600">Sushi</span>
        </Link>
        <ul className="flex gap-6">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/cardapio">Cardápio</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;