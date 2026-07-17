import Link from "next/link";
export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-emerald-600">Naqera</span>
          </div>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
            <a href="#" className="hover:text-emerald-600">Book Now</a>
            <a href="#" className="hover:text-emerald-600">Naqera Lease</a>
            <a href="#" className="hover:text-emerald-600">For Sale</a>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center gap-3">
            <button className="text-sm font-medium text-gray-700 hover:text-emerald-600">
              Register Property
            </button>
            <Link
              href="/login"
              className="bg-emerald-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-emerald-700"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}