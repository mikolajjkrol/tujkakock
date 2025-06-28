import React from "react";
import { Helmet } from "react-helmet";
import { products } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";
import { Button } from "@/components/ui/button";

export default function Products() {
  // Group products by category
  const productsByCategory: { [key: string]: typeof products } = {};
  products.forEach((product) => {
    if (!productsByCategory[product.category]) {
      productsByCategory[product.category] = [];
    }
    productsByCategory[product.category].push(product);
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <Helmet>
        <title>Nasze tuje - Tujka Kock</title>
      </Helmet>
      
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-900 mb-4">Nasza kolekcja tuj</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Poznaj naszą szeroką ofertę wysokiej jakości tuj, starannie uprawianych i wyselekcjonowanych,
            aby upiększyć Twój ogród i zapewnić prywatność.
          </p>
        </div>

        {/* Product Filter (Simple Version) */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {Object.keys(productsByCategory).map((category) => (
              <Button
                key={category}
                variant="outline"
                className="border-green-700 text-green-700 hover:bg-green-50"
                onClick={() => {
                  const element = document.getElementById(category);
                  element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Products by Category */}
        {Object.entries(productsByCategory).map(([category, categoryProducts]) => (
          <div key={category} id={category} className="mb-16">
            <h2 className="text-2xl font-bold text-green-800 mb-8 text-center">{category} Tuje</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        ))}

        {/* Additional Information */}
        <div className="bg-white p-8 rounded-lg shadow-md mt-12">
          <h2 className="text-2xl font-bold text-green-900 mb-4">Jak wybrać odpowiednią tuję do swojego ogrodu</h2>
          <p className="mb-4">
            Wybierając tuję do ogrodu lub na działkę, weź pod uwagę następujące czynniki:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
            <li>Dostępna przestrzeń i docelowy rozmiar drzewa</li>
            <li>Tempo wzrostu – jak szybko potrzebujesz żywopłotu</li>
            <li>Nasłonecznienie w miejscu sadzenia</li>
            <li>Warunki glebowe i drenaż</li>
            <li>Pożądany wygląd i forma (kolumnowa, kulista itp.)</li>
            <li>Lokalny klimat i strefa mrozoodporności</li>
          </ul>
          <p>
            Jeśli potrzebujesz pomocy w wyborze idealnych odmian tuj do swoich potrzeb,
            skontaktuj się z naszym zespołem ekspertów po indywidualną poradę.
          </p>
        </div>
      </div>
    </div>
  );
}