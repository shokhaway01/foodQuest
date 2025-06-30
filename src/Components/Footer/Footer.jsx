'use client'

export default function Footer() {
  return (
    <footer className="relative">
      {/* Лёгкий градиентный фон на всю ширину */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#fefcea] to-[#f1daff] opacity-40 blur-sm pointer-events-none" />

      {/* Контент футера */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 text-gray-800">
        {/* Категория 1 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-black transition">About Us</a></li>
            <li><a href="#" className="hover:text-black transition">Careers</a></li>
            <li><a href="#" className="hover:text-black transition">Press</a></li>
            <li><a href="#" className="hover:text-black transition">Blog</a></li>
          </ul>
        </div>

        {/* Категория 2 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Help</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-black transition">Support Center</a></li>
            <li><a href="#" className="hover:text-black transition">FAQ</a></li>
            <li><a href="#" className="hover:text-black transition">Contact Us</a></li>
            <li><a href="#" className="hover:text-black transition">Report Issue</a></li>
          </ul>
        </div>

        {/* Категория 3 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Explore</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-black transition">Restaurants</a></li>
            <li><a href="#" className="hover:text-black transition">Cities</a></li>
            <li><a href="#" className="hover:text-black transition">Pricing</a></li>
            <li><a href="#" className="hover:text-black transition">Reviews</a></li>
          </ul>
        </div>

        {/* Категория 4 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-black transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-black transition">Terms of Service</a></li>
            <li><a href="#" className="hover:text-black transition">Cookies Settings</a></li>
            <li><a href="#" className="hover:text-black transition">License</a></li>
          </ul>
        </div>
      </div>

      {/* Нижняя подпись */}
      <div className="relative z-10 border-t border-gray-300 pt-6 pb-4 text-center text-sm text-gray-600">
        Powered by <span className="font-semibold text-gray-800">Shokhaway</span> | <span className="font-semibold text-gray-800">Falco Team</span>
      </div>
    </footer>
  )
}
