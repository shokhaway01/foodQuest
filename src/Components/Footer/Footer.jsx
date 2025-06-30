'use client'

export default function Footer() {
  return (
    <footer className="relative text-gray-300">
      {/* Градиентный фон на всю ширину */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] blur-sm opacity-90" />

      {/* Контент футера */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Категория 1 */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition">About Us</a></li>
            <li><a href="#" className="hover:text-white transition">Careers</a></li>
            <li><a href="#" className="hover:text-white transition">Press</a></li>
            <li><a href="#" className="hover:text-white transition">Blog</a></li>
          </ul>
        </div>

        {/* Категория 2 */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Help</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition">Support Center</a></li>
            <li><a href="#" className="hover:text-white transition">FAQ</a></li>
            <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
            <li><a href="#" className="hover:text-white transition">Report Issue</a></li>
          </ul>
        </div>

        {/* Категория 3 */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Explore</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition">Restaurants</a></li>
            <li><a href="#" className="hover:text-white transition">Cities</a></li>
            <li><a href="#" className="hover:text-white transition">Pricing</a></li>
            <li><a href="#" className="hover:text-white transition">Reviews</a></li>
          </ul>
        </div>

        {/* Категория 4 */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white transition">Cookies Settings</a></li>
            <li><a href="#" className="hover:text-white transition">License</a></li>
          </ul>
        </div>
      </div>

      {/* Линия и надпись */}
      <div className="relative z-10 border-t border-gray-700 pt-6 pb-4 text-center text-sm text-gray-400">
        Powered by <span className="text-white font-semibold">Shokhaway</span> | <span className="text-white font-semibold">Falco Team</span>
      </div>
    </footer>
  )
}
