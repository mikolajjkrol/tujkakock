import React from "react";
import { Helmet } from "react-helmet";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "@/components/sections/ContactForm";

export default function Contact() {
  const businessHours = [
    { day: "Pon.-Pt.", hours: "09:00 - 15:00" },
    { day: "Sobota", hours: "09:00 - 13:00" },
    { day: "Niedziela", hours: "Zamknięte" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <Helmet>
        <title>Kontakt - Tujka Kock</title>
      </Helmet>
      
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-900 mb-4">Kontakt</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Masz pytania dotyczące naszych tuj lub potrzebujesz pomocy z zamówieniem?
            Jesteśmy do Twojej dyspozycji! Skontaktuj się z nami w jeden z poniższych sposobów.
          </p>
        </div>

        <div>
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-md flex items-center justify-center">
              {/* <h2 className="text-2xl font-bold text-green-900 mb-6">Nasze dane</h2> */}
              
              <div className="flex flex-col md:flex-row items-start justify-center space-y-8 md:space-y-0 flex-wrap md:space-x-12 w-full">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Adres</h3>
                    <p className="text-gray-700">
                      ul. Piłsudskiego 21<br />
                      Kock, 21-150
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Telefon</h3>
                    <p className="text-gray-700">+48 888 468 811</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">E-mail</h3>
                    <p className="text-gray-700">
                      <a href="mailto:marekkock@gmail.com" className="hover:text-green-700">
                        marekkock@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Godziny otwarcia</h3>
                    <div className="text-gray-700 space-y-1">
                      {businessHours.map((schedule, index) => (
                        <div key={index} className="flex justify-between">
                          <span className="font-medium">{schedule.day}</span>
                          &nbsp;&nbsp;&nbsp;
                          <span>{schedule.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="bg-white p-4 rounded-lg shadow-md h-96">
              <div className="w-full h-full bg-gray-200 rounded flex items-center justify-center">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d466.1538864782448!2d22.446640004704214!3d51.64285541102424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4722137763ecb2bf%3A0xa560f8b79b67d3f5!2sTujka%20Kock!5e0!3m2!1spl!2spl!4v1750884505443!5m2!1spl!2spl" width="100%" height="100%" loading="lazy"></iframe>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
        </div>
        
        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-green-900 mb-6 text-center">Najczęściej zadawane pytania</h2>
          
          <div className="bg-white p-8 rounded-lg shadow-md space-y-6">
            <div>
              <h3 className="font-semibold text-lg text-green-800 mb-2">Czy oferujecie dostawę?</h3>
              <p className="text-gray-700">Tak, oferujemy dostawę zamówień w promieniu 50 km od naszej szkółki. Koszt dostawy zależy od odległości i wielkości zamówienia.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg text-green-800 mb-2">Czy pomagacie w sadzeniu?</h3>
              <p className="text-gray-700">Oczywiście! Oferujemy profesjonalną usługę sadzenia tuj, aby zapewnić im najlepsze warunki wzrostu. Skontaktuj się z nami, aby poznać ceny i dostępność.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg text-green-800 mb-2">Jaka jest wasza polityka zwrotów?</h3>
              <p className="text-gray-700">Gwarantujemy jakość naszych roślin. Jeśli Twoja tuja wykazuje oznaki złego stanu w ciągu 30 dni od zakupu (przy zachowaniu zasad pielęgnacji), wymienimy ją bez dodatkowych kosztów.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg text-green-800 mb-2">Jak szybko mogę złożyć zamówienie?</h3>
              <p className="text-gray-700">Zamówienia można składać osobiście w szkółce, telefonicznie lub przez stronę internetową. Zwykle realizujemy zamówienia w ciągu 1-2 dni roboczych.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}