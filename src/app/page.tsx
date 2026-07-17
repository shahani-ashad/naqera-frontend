import PropertyCard from "@/components/PropertyCard";
import Link from "next/link";

const sampleProperties = [
  {
    slug: "al-olaya-premium-suite",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600",
    title: "Al Olaya Premium Suite",
    city: "Riyadh",
    type: "Apartment",
    price: 450,
    rating: 4.8,
  },
  {
    slug: "red-sea-corniche-villa",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600",
    title: "Red Sea Corniche Villa",
    city: "Jeddah",
    type: "Villa",
    price: 1200,
    rating: 4.9,
  },
  {
    slug: "diriyah-heritage-chalet",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600",
    title: "Diriyah Heritage Chalet",
    city: "Riyadh",
    type: "Chalet",
    price: 680,
    rating: 4.7,
  },
  {
    slug: "abha-mountain-camp",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600",
    title: "Abha Mountain Camp",
    city: "Abha",
    type: "Camp",
    price: 320,
    rating: 4.6,
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero section */}
      <section className="bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Find your next stay in Saudi Arabia
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Book Now · Naqera Lease · For Sale
          </p>

          {/* Search bar */}
          <div className="mt-8 max-w-3xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-200 p-3 flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              placeholder="Where are you going?"
              className="flex-1 px-4 py-3 rounded-xl focus:outline-none focus:bg-gray-50"
            />
            <input
              type="date"
              className="px-4 py-3 rounded-xl focus:outline-none focus:bg-gray-50"
            />
            <input
              type="number"
              placeholder="Guests"
              min={1}
              className="w-full sm:w-24 px-4 py-3 rounded-xl focus:outline-none focus:bg-gray-50"
            />
            <button className="bg-emerald-600 text-white font-medium px-6 py-3 rounded-xl hover:bg-emerald-700">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Property listings */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Popular in Saudi Arabia
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sampleProperties.map((property) => (
            <Link key={property.slug} href={`/property/${property.slug}`}>
              <PropertyCard {...property} />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}