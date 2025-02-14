
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb"
          alt="Scenic mountain landscape"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative h-full flex items-center justify-center">
        <div className={`text-center transform transition-all duration-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}>
          <p className="text-white/80 text-sm md:text-base mb-4 tracking-wide animate-fade-down">
            DISCOVER THE WORLD
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-up">
            Your Journey Begins Here
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-up">
            Experience unforgettable destinations with our curated travel experiences
          </p>
          <Button 
            className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-6 text-lg animate-fade-up"
            onClick={() => {
              const element = document.querySelector("#featured-destinations");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Start Exploring <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
