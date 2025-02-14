
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

interface DestinationCardProps {
  image: string;
  title: string;
  location: string;
  description: string;
}

const DestinationCard = ({ image, title, location, description }: DestinationCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <MapPin className="h-4 w-4" />
          <span>{location}</span>
        </div>
        <h3 className="mt-2 text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
        <Button 
          className="mt-4 w-full rounded-lg bg-black text-white hover:bg-black/90"
        >
          Explore Now
        </Button>
      </div>
    </div>
  );
};

export default DestinationCard;
