type PageProps = {
  params: Promise<{ slug: string }>;
};

// Same sample data as homepage — later this will come from a real database
const sampleProperties = [
  {
    slug: "al-olaya-premium-suite",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200",
    title: "Al Olaya Premium Suite",
    city: "Riyadh",
    type: "Apartment",
    price: 450,
    rating: 4.8,
    bedrooms: 2,
    bathrooms: 2,
    maxGuests: 4,
    description:
      "A modern apartment in the heart of Riyadh's Al Olaya district, featuring a private pool, floor-to-ceiling windows, and easy access to King Fahd Road.",
    amenities: ["WiFi", "Private Pool", "AC", "Kitchen", "Smart TV", "Covered Parking"],
  },
  {
    slug: "red-sea-corniche-villa",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200",
    title: "Red Sea Corniche Villa",
    city: "Jeddah",
    type: "Villa",
    price: 1200,
    rating: 4.9,
    bedrooms: 4,
    bathrooms: 3,
    maxGuests: 8,
    description:
      "A spacious villa overlooking the Red Sea Corniche, perfect for families and groups looking for a luxury stay with private pool access.",
    amenities: ["WiFi", "Private Pool", "BBQ", "Garden", "AC", "Kitchen"],
  },
  {
    slug: "diriyah-heritage-chalet",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200",
    title: "Diriyah Heritage Chalet",
    city: "Riyadh",
    type: "Chalet",
    price: 680,
    rating: 4.7,
    bedrooms: 3,
    bathrooms: 2,
    maxGuests: 6,
    description:
      "A beautifully restored chalet near historic Diriyah, blending traditional Najdi architecture with modern comforts.",
    amenities: ["WiFi", "Pool", "Majlis", "Kitchen", "Parking"],
  },
  {
    slug: "abha-mountain-camp",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200",
    title: "Abha Mountain Camp",
    city: "Abha",
    type: "Camp",
    price: 320,
    rating: 4.6,
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 2,
    description:
      "A cozy mountain camp in Abha with stunning views, ideal for a peaceful getaway close to nature.",
    amenities: ["WiFi", "Fire Pit", "Parking"],
  },
];

export default async function PropertyDetail({ params }: PageProps) {
  const { slug } = await params;
  const property = sampleProperties.find((p) => p.slug === slug);

  if (!property) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold">Property not found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold text-gray-900">{property.title}</h1>
      <div className="mt-2 flex items-center gap-3 text-sm text-gray-600">
        <span>★ {property.rating}</span>
        <span>·</span>
        <span>{property.city}, Saudi Arabia</span>
        <span>·</span>
        <span>{property.type}</span>
      </div>

      <div className="mt-6 rounded-2xl overflow-hidden aspect-[16/9] bg-gray-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <div className="flex gap-6 pb-6 border-b border-gray-200 text-gray-700">
            <span>{property.bedrooms} bedrooms</span>
            <span>{property.bathrooms} bathrooms</span>
            <span>Up to {property.maxGuests} guests</span>
          </div>

          <div className="py-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold mb-2">About this place</h2>
            <p className="text-gray-700 leading-relaxed">{property.description}</p>
          </div>

          <div className="py-6">
            <h2 className="text-xl font-semibold mb-3">Amenities</h2>
            <div className="grid grid-cols-2 gap-2">
              {property.amenities.map((amenity) => (
                <div key={amenity} className="text-gray-700 flex items-center gap-2">
                  <span className="text-emerald-600">✓</span>
                  {amenity}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="sticky top-24 border border-gray-200 rounded-2xl p-6 shadow-sm">
            <p className="text-2xl font-bold text-gray-900">
              SAR {property.price.toLocaleString()}
              <span className="text-base font-normal text-gray-500"> / night</span>
            </p>

            <div className="mt-4 border border-gray-300 rounded-xl overflow-hidden">
              <div className="grid grid-cols-2 divide-x divide-gray-300">
                <div className="p-3">
                  <label className="block text-xs text-gray-500">Check-in</label>
                  <input type="date" className="w-full text-sm mt-1 focus:outline-none" />
                </div>
                <div className="p-3">
                  <label className="block text-xs text-gray-500">Check-out</label>
                  <input type="date" className="w-full text-sm mt-1 focus:outline-none" />
                </div>
              </div>
              <div className="p-3 border-t border-gray-300">
                <label className="block text-xs text-gray-500">Guests</label>
                <input
                  type="number"
                  min={1}
                  defaultValue={1}
                  className="w-full text-sm mt-1 focus:outline-none"
                />
              </div>
            </div>

            <button className="mt-4 w-full bg-emerald-600 text-white font-medium py-3 rounded-xl hover:bg-emerald-700">
              Request to Book
            </button>

            <p className="mt-3 text-xs text-gray-500 text-center">
              You won&apos;t be charged yet
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}