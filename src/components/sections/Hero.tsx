import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative w-full py-16 bg-green-50 md:py-24 lg:py-32">
      <div className="container grid items-center grid-cols-1 gap-12 px-4 mx-auto md:grid-cols-2">
        <div className="flex flex-col space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter text-green-900 sm:text-5xl md:text-6xl">
            Piękne tuje do Twojego ogrodu
          </h1>
          <p className="max-w-[600px] text-gray-600 md:text-xl">
            Odmień swoją przestrzeń dzięki lokalnie uprawianym, najwyższej jakości tujom. Idealne na żywopłoty, elementy ozdobne lub centralne punkty ogrodu.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <Button 
              asChild
              size="lg" 
              className="bg-green-700 hover:bg-green-800"
            >
              <Link to="/products">
                Zobacz produkty <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline" 
              size="lg"
              className="border-green-700 text-green-700 hover:bg-green-50"
            >
              <Link to="/contact">
                Poproś o wycenę
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
            <img
              src="/assets/images/hero-tuja.jpeg" 
              alt="Piękne tuje"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;