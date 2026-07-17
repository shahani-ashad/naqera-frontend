type PropertyCardProps = {
  slug: string;
  image: string;
  title: string;
  city: string;
  type: string;
  price: number;
  rating: number;
};

export default function PropertyCard({
  image,
  title,
  city,
  type,
  price,
  rating,
}: PropertyCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur flex items-center justify-center hover:bg-white"
          aria-label="Save to favorites"
        >
          <span className="text-lg">♡</span>
        </button>
        <span className="absolute top-3 left-3 bg-white/90 text-xs font-medium px-2 py-1 rounded-full">
          {type}
        </span>
      </div>

      <div className="mt-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-gray-900 truncate">{title}</h3>
          <div className="flex items-center gap-1 text-sm shrink-0">
            <span>★</span>
            <span>{rating.toFixed(1)}</span>
          </div>
        </div>
        <p className="text-sm text-gray-500">{city}, Saudi Arabia</p>
        <p className="mt-1 text-sm">
          <span className="font-semibold text-gray-900">SAR {price.toLocaleString()}</span>
          <span className="text-gray-500"> / night</span>
        </p>
      </div>
    </div>
  );
}