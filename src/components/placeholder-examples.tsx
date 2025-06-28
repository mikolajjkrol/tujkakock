import React from "react";
import { Card } from "./ui/card";
import { 
  PlaceholderImage, 
  ProfilePlaceholder, 
  ProductPlaceholder, 
  BannerPlaceholder 
} from "./ui/placeholder-image";

/**
 * A component showcasing different placeholder image examples
 */
export function PlaceholderExamples() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold mb-4">Basic Placeholder Images</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-4">
            <h3 className="font-medium mb-3">Default Placeholder</h3>
            <PlaceholderImage />
          </Card>
          
          <Card className="p-4">
            <h3 className="font-medium mb-3">Custom Size</h3>
            <PlaceholderImage width={250} height={150} />
          </Card>
          
          <Card className="p-4">
            <h3 className="font-medium mb-3">Custom Colors</h3>
            <PlaceholderImage 
              backgroundColor="#f0f9ff" 
              textColor="#0284c7" 
              text="Blue Placeholder" 
            />
          </Card>
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold mb-4">Profile Placeholders</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          <Card className="p-4 flex flex-col items-center">
            <ProfilePlaceholder size={80} text="John Doe" />
            <p className="mt-3 text-sm text-center">John Doe</p>
          </Card>
          
          <Card className="p-4 flex flex-col items-center">
            <ProfilePlaceholder 
              size={80} 
              text="Jane Smith" 
              backgroundColor="#f0abfc" 
              textColor="#701a75" 
            />
            <p className="mt-3 text-sm text-center">Jane Smith</p>
          </Card>
          
          <Card className="p-4 flex flex-col items-center">
            <ProfilePlaceholder 
              size={80} 
              text="Alex Johnson" 
              backgroundColor="#fde68a" 
              textColor="#92400e" 
            />
            <p className="mt-3 text-sm text-center">Alex Johnson</p>
          </Card>
          
          <Card className="p-4 flex flex-col items-center">
            <ProfilePlaceholder 
              size={80} 
              text="Anonymous" 
              backgroundColor="#d1d5db" 
              textColor="#1f2937" 
            />
            <p className="mt-3 text-sm text-center">Anonymous User</p>
          </Card>
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold mb-4">Product Placeholders</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-4">
            <ProductPlaceholder size="small" text="Small Product" />
            <div className="mt-3">
              <h3 className="font-medium">Small Product</h3>
              <p className="text-sm text-gray-500">200×200 pixels</p>
            </div>
          </Card>
          
          <Card className="p-4">
            <ProductPlaceholder 
              size="medium" 
              backgroundColor="#f3f4f6" 
              textColor="#6b7280"
              text="Medium Product" 
            />
            <div className="mt-3">
              <h3 className="font-medium">Medium Product</h3>
              <p className="text-sm text-gray-500">300×300 pixels</p>
            </div>
          </Card>
          
          <Card className="p-4">
            <ProductPlaceholder 
              size="large" 
              backgroundColor="#e0f2fe" 
              textColor="#0284c7"
              text="Large Product" 
            />
            <div className="mt-3">
              <h3 className="font-medium">Large Product</h3>
              <p className="text-sm text-gray-500">600×600 pixels</p>
            </div>
          </Card>
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold mb-4">Banner Placeholders</h2>
        <div className="space-y-6">
          <div>
            <BannerPlaceholder size="small" text="Small Banner" />
            <p className="text-sm text-gray-500 mt-2">Small banner: 600×200 pixels</p>
          </div>
          
          <div>
            <BannerPlaceholder 
              size="medium" 
              backgroundColor="#ecfeff" 
              textColor="#0e7490"
              text="Medium Banner" 
            />
            <p className="text-sm text-gray-500 mt-2">Medium banner: 800×300 pixels</p>
          </div>
          
          <div className="overflow-auto">
            <BannerPlaceholder 
              size="large" 
              backgroundColor="#f0fdf4" 
              textColor="#166534"
              text="Large Banner" 
            />
            <p className="text-sm text-gray-500 mt-2">Large banner: 1200×400 pixels</p>
          </div>
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold mb-4">Responsive Examples</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-4">
            <h3 className="font-medium mb-3">Responsive Width</h3>
            <PlaceholderImage 
              className="w-full h-[200px]"
              style={{ width: '100%' }}
              text="Responsive Width Placeholder"
            />
          </Card>
          
          <Card className="p-4">
            <h3 className="font-medium mb-3">Aspect Ratio</h3>
            <div className="aspect-video relative">
              <PlaceholderImage 
                className="absolute inset-0"
                style={{ width: '100%', height: '100%' }}
                text="16:9 Aspect Ratio"
                backgroundColor="#ede9fe"
                textColor="#5b21b6"
              />
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}