import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-linear-to-r from-slate-900 via-purple-900 to-indigo-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo / Title */}
        <Link
          to="/"
          className="flex items-center gap-2 text-white text-2xl font-bold tracking-wide hover:opacity-90 transition"
        >
          🎥 <span>MovieVerse</span>
        </Link>

        {/* Right Section */}
        <div className="text-sm text-gray-300 hidden sm:block">
          Discover • Search • Explore
        </div>
      </div>
    </nav>
  );
}
