import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-zinc-900 text-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="text-2xl font-bold">
          Sakura <span className="text-red-600">Sushi</span>
        </Link>
        <ul className="flex items-center gap-6 font-medium">
            <li>
                <Link to="/" className="hover:text-red-600 transition">Home</Link>
            </li>
            <li>
                <Link
                    to="/cardapio"
                    className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition"
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