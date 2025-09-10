import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          🐶 Dog Gallery
        </Link>
        <nav className="space-x-6">
          <Link
            to="/"
            className="text-gray-700 font-semibold hover:text-blue-600 transition"
          >
            Home
          </Link>
          <Link
            to="/breeds"
            className="text-gray-700 font-semibold hover:text-blue-600 transition"
          >
            Breeds
          </Link>
        </nav>
      </div>
    </header>
  );
}
