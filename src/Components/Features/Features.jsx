'use client'


const features = [
  {
    name: 'Fast & Fresh Delivery',
    description:
      'Get your meals in record time while they’re still hot. We partner with the best couriers to bring your food lightning fast.',
    icon: '🚀',
    color: 'from-orange-400 to-red-400',
  },
  {
    name: 'Top-quality Ingredients',
    description:
      'Sourced locally and prepared daily — taste the freshness in every bite. No compromises. Ever.',
    icon: '🥬',
    color: 'from-green-400 to-emerald-500',
  },
  {
    name: 'One-tap Ordering',
    description:
      'Intuitive UI designed for foodies. Order your favorites with a single tap. Minimal steps. Maximum flavor.',
    icon: '📱',
    color: 'from-yellow-300 to-orange-400',
  },
  {
    name: 'Secure Payments',
    description:
      'Your privacy matters. We use top-level encryption and accept all modern payment methods with zero hassle.',
    icon: '🔒',
    color: 'from-purple-400 to-indigo-500',
  },
]

export default function Features() {
  return (
    <section className="bg-white py-24 sm:py-32" id="features">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-sm font-semibold tracking-widest text-orange-600 uppercase">
            Why choose Food Quest?
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Crafted for true food lovers
          </p>
          <p className="mt-4 text-lg text-gray-600">
            Food Quest isn’t just another delivery app — it’s your gateway to exceptional flavors, smart ordering, and delightful experience.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {features.map((feature, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-xl transition-all duration-300 hover:shadow-2xl"
            >
              <div
                className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br ${feature.color} text-white text-2xl shadow-md transition-transform group-hover:scale-110`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-orange-600 transition">
                {feature.name}
              </h3>
              <p className="mt-3 text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
