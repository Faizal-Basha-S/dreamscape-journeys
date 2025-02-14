
import DestinationCard from "./DestinationCard";

const destinations = [
  {
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
    title: "Swiss Alps",
    location: "Switzerland",
    description: "Experience the majestic beauty of the Swiss Alps with breathtaking views and adventures.",
  },
  {
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    title: "Tropical Paradise",
    location: "Maldives",
    description: "Escape to crystal clear waters and white sandy beaches in this tropical paradise.",
  },
  {
    image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed",
    title: "Mountain Retreat",
    location: "Canada",
    description: "Find peace and tranquility in our exclusive mountain retreats and lodges.",
  },
];

const FeaturedDestinations = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Destinations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our hand-picked selection of extraordinary destinations
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <DestinationCard key={index} {...destination} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
