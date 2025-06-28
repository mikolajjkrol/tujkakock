import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ProductType } from "@/data/products";

interface ProductCardProps {
  product: ProductType;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="h-60 overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold text-green-900">{product.name}</h3>
          <div className="px-2 py-1 text-sm font-medium text-white bg-green-600 rounded-full">
            ${product.price.toFixed(2)}
          </div>
        </div>
        <p className="text-sm text-gray-500 mb-2">
          <span className="font-medium">Height:</span> {product.height}
        </p>
        <p className="mb-4 text-gray-700">{product.description}</p>
        <div className="flex flex-wrap gap-2">
          {product.features.map((feature, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs bg-green-100 rounded-full text-green-800"
            >
              {feature}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild variant="outline" className="w-full border-green-700 text-green-700 hover:bg-green-50">
          <Link to="/contact">Skontaktuj się</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;