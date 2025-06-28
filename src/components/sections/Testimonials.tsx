import React from "react";
import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/data/testimonials";

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-green-900 md:text-4xl">
            Opinie naszych klientów
          </h2>
          <p className="max-w-2xl text-lg text-gray-600">
            Nie wierz nam na słowo. Oto co mówią nasi zadowoleni klienci
            o naszych tujach i obsłudze.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-6">
                <Quote className="w-10 h-10 mb-4 text-green-600 opacity-20" />
                <p className="mb-6 italic text-gray-600">{testimonial.text}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 mr-4 overflow-hidden rounded-full bg-gray-200">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;