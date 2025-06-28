export interface ProductType {
  id: number;
  name: string;
  latinName: string;
  price: number;
  height: string;
  imageUrl: string;
  description: string;
  features: string[];
  growthRate: string;
  careLevel: string;
  sunExposure: string;
  soilType: string;
  category: string;
}

export const products: ProductType[] = [
  {
    id: 1,
    name: "Emerald Green Tuja",
    latinName: "Thuja occidentalis 'Smaragd'",
    price: 49.99,
    height: "3-4 feet",
    imageUrl: "/assets/images/emerald-green.jpeg",
    description: "A popular choice for hedges with its bright green foliage and perfect columnar shape.",
    features: ["Dense foliage", "Cold hardy", "Low maintenance"],
    growthRate: "Moderate (6-9 inches per year)",
    careLevel: "Easy",
    sunExposure: "Full sun to partial shade",
    soilType: "Well-drained, slightly acidic to neutral",
    category: "Hedge"
  },
  {
    id: 2,
    name: "Thuja Green Giant",
    latinName: "Thuja standishii x plicata 'Green Giant'",
    price: 59.99,
    height: "4-5 feet",
    imageUrl: "/assets/images/green-giant.jpeg",
    description: "Fast-growing evergreen with a natural pyramidal shape, perfect for privacy screens.",
    features: ["Fast growing", "Disease resistant", "Drought tolerant"],
    growthRate: "Fast (3-5 feet per year)",
    careLevel: "Easy",
    sunExposure: "Full sun to partial shade",
    soilType: "Adaptable to various soils",
    category: "Privacy Screen"
  },
  {
    id: 3,
    name: "Golden Globe Tuja",
    latinName: "Thuja occidentalis 'Golden Globe'",
    price: 39.99,
    height: "2-3 feet",
    imageUrl: "/assets/images/golden-globe.jpeg",
    description: "Compact globe-shaped evergreen with bright gold foliage, perfect for small gardens.",
    features: ["Golden foliage", "Compact size", "Good winter color"],
    growthRate: "Slow (3-6 inches per year)",
    careLevel: "Moderate",
    sunExposure: "Full sun to light shade",
    soilType: "Moist, well-drained soil",
    category: "Ornamental"
  },
  {
    id: 4,
    name: "Danica Dwarf Tuja",
    latinName: "Thuja occidentalis 'Danica'",
    price: 34.99,
    height: "1-2 feet",
    imageUrl: "/assets/images/danica.jpeg",
    description: "A perfect dwarf globe variety for rock gardens, containers, and small spaces.",
    features: ["Dwarf size", "Perfect sphere shape", "Winter hardy"],
    growthRate: "Very slow (1-3 inches per year)",
    careLevel: "Moderate",
    sunExposure: "Full sun to partial shade",
    soilType: "Well-drained, moist soil",
    category: "Dwarf"
  },
  {
    id: 5,
    name: "Brabant Tuja",
    latinName: "Thuja occidentalis 'Brabant'",
    price: 45.99,
    height: "3-4 feet",
    imageUrl: "/assets/images/brabant.jpeg",
    description: "Fast-growing hedge variety with yellowish-green foliage and conical shape.",
    features: ["Fast growing", "Dense hedge", "Wind resistant"],
    growthRate: "Fast (1-2 feet per year)",
    careLevel: "Easy",
    sunExposure: "Full sun to light shade",
    soilType: "Adaptable to most soils",
    category: "Hedge"
  },
  {
    id: 6,
    name: "Pyramidalis Tuja",
    latinName: "Thuja occidentalis 'Pyramidalis'",
    price: 54.99,
    height: "4-5 feet",
    imageUrl: "/assets/images/pyramidalis.jpeg",
    description: "Classic columnar tuja with dark green foliage, ideal for formal gardens.",
    features: ["Columnar shape", "Low maintenance", "Long-lived"],
    growthRate: "Medium (9-12 inches per year)",
    careLevel: "Easy",
    sunExposure: "Full sun to partial shade",
    soilType: "Well-drained soil",
    category: "Columnar"
  }
];