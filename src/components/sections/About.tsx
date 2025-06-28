import React from "react";
import { Check } from "lucide-react";

const About = () => {
  const benefits = [
    "Uprawiane lokalnie i zaaklimatyzowane do regionu",
    "Szeroki wybór gatunków i rozmiarów tuj",
    "Ekspercka porada dotycząca sadzenia i pielęgnacji",
    "Dostępna dostawa i montaż",
    "Ekologiczne metody uprawy",
  ];

  return (
    <section className="py-16 bg-white" id="about">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-green-900 md:text-4xl">
              O Tujka Kock
            </h2>
            <p className="text-lg text-gray-600">
              Założona w 2010 roku, Tujka Kock to rodzinna firma specjalizująca się w uprawie
              i sprzedaży wysokiej jakości tuj do ogrodów prywatnych i terenów komercyjnych.
              Położona na 15 hektarach żyznej ziemi, dbamy o nasze drzewa z pasją i doświadczeniem.
            </p>
            <p className="text-lg text-gray-600">
              Nasza pasja do tuj sprawia, że oferujemy najlepszy wybór i jakość w regionie.
              Niezależnie czy potrzebujesz żywopłotu, roślin ozdobnych czy akcentów do ogrodu,
              mamy idealne odmiany tuj, które wzbogacą Twoją przestrzeń.
            </p>
            <div className="pt-4">
              <h3 className="mb-4 text-xl font-semibold text-green-800">Dlaczego warto nas wybrać?</h3>
              <ul className="space-y-2">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-green-600 shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-lg">
              <img
                src="/assets/images/tuja-nursery.jpeg"
                alt="Our tuja nursery"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="overflow-hidden rounded-lg mt-8">
              <img
                src="/assets/images/planting-tuja.jpeg"
                alt="Expert planting tujas"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img
                src="/assets/images/tuja-hedge.jpeg"
                alt="Tuja hedge"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="overflow-hidden rounded-lg mt-8">
              <img
                src="/public/assets/images/team-member.jpeg"
                alt="Our team member"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;