
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Users, MapPin, Clock } from "lucide-react";

const destinationsData = {
  "swiss-alps": {
    title: "Swiss Alps",
    location: "Switzerland",
    description: "Experience the majestic beauty of the Swiss Alps with breathtaking views and adventures.",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
    duration: "7 days",
    groupSize: "2-12 people",
    activities: ["Hiking", "Skiing", "Mountain Climbing", "Photography"],
    highlights: [
      "Visit the iconic Matterhorn",
      "Experience Swiss chocolate making",
      "Stay in luxury mountain chalets",
      "Ride the Glacier Express"
    ]
  },
  "tropical-paradise": {
    title: "Tropical Paradise",
    location: "Maldives",
    description: "Escape to crystal clear waters and white sandy beaches in this tropical paradise.",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    duration: "5 days",
    groupSize: "2-8 people",
    activities: ["Snorkeling", "Diving", "Beach Yoga", "Island Hopping"],
    highlights: [
      "Stay in overwater villas",
      "Swim with manta rays",
      "Sunset dolphin cruise",
      "Private beach dinners"
    ]
  },
  "mountain-retreat": {
    title: "Mountain Retreat",
    location: "Canada",
    description: "Find peace and tranquility in our exclusive mountain retreats and lodges.",
    image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed",
    duration: "6 days",
    groupSize: "2-10 people",
    activities: ["Wildlife Watching", "Canoeing", "Nature Walks", "Photography"],
    highlights: [
      "Spot local wildlife",
      "Northern lights viewing",
      "Luxury lodge accommodation",
      "Guided nature tours"
    ]
  }
};

const Destination = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const destination = destinationsData[id as keyof typeof destinationsData];

  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Destination not found</h1>
          <Button onClick={() => navigate("/")} variant="outline">
            Return Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src={destination.image}
          alt={destination.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <Button 
          onClick={() => navigate("/")}
          className="absolute top-6 left-6 bg-white/10 backdrop-blur-md hover:bg-white/20"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold mb-4">{destination.title}</h1>
            <div className="flex items-center gap-4 text-gray-600 mb-6">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-1" />
                {destination.location}
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-1" />
                {destination.duration}
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-1" />
                {destination.groupSize}
              </div>
            </div>
            <p className="text-lg text-gray-700 mb-8">{destination.description}</p>
            
            <h2 className="text-2xl font-semibold mb-4">Activities</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {destination.activities.map((activity, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
                  {activity}
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-semibold mb-4">Highlights</h2>
            <ul className="space-y-4">
              {destination.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-sm mr-3">
                    {index + 1}
                  </span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-xl sticky top-6">
              <h3 className="text-xl font-semibold mb-4">Book This Trip</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Travel Date</label>
                  <div className="flex items-center border rounded-lg p-3 bg-white">
                    <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                    <input
                      type="date"
                      className="flex-1 outline-none bg-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Number of Travelers</label>
                  <div className="flex items-center border rounded-lg p-3 bg-white">
                    <Users className="h-5 w-5 text-gray-400 mr-2" />
                    <select className="flex-1 outline-none bg-transparent">
                      {[1,2,3,4,5,6,7,8].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'person' : 'people'}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <Button className="w-full bg-black text-white hover:bg-black/90">
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
