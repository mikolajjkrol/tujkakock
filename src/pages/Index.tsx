import React from "react";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import Testimonials from "@/components/sections/Testimonials";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <FeaturedProducts />
    </div>
  );
}