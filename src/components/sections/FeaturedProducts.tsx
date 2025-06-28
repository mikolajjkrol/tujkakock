import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ProductCard from "../products/ProductCard";
import { products } from "@/data/products";

const FeaturedProducts = () => {
  // Get only the first 3 products to feature
  const featuredProducts = products.slice(0, 3);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-green-900 md:text-4xl">
            Nasze polecane tuje
          </h2>
          <p className="max-w-2xl text-lg text-gray-600">
            Poznaj nasze najpopularniejsze odmiany tuj, idealne na żywopłoty,
            punkty centralne ogrodu lub eleganckie obramowania.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button 
            asChild
            variant="outline" 
            size="lg" 
            className="border-green-700 text-green-700 hover:bg-green-50"
          >
            <Link to="/products">
              Zobacz wszystkie produkty <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;