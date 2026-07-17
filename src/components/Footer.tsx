export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <span className="text-xl font-bold text-white">Naqera</span>
            <p className="mt-3 text-sm text-gray-400">
              Saudi Arabia&apos;s real estate platform for short-term rentals,
              leasing, and property sales.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Book Now</a></li>
              <li><a href="#" className="hover:text-white">Naqera Lease</a></li>
              <li><a href="#" className="hover:text-white">For Sale</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Register Property</a></li>
              <li><a href="#" className="hover:text-white">Support</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>Riyadh, Saudi Arabia</li>
              <li>support@naqera.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-sm text-gray-500 text-center">
          © 2026 Naqera. All rights reserved.
        </div>
      </div>
    </footer>
  );
}