import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Pages
import Index from './pages/Index';
import Products from './pages/Products';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Helmet>
        <title>TujaWorld - Premium Quality Tuja Trees</title>
        <meta name="description" content="TujaWorld offers locally grown, premium quality tuja trees for your garden and landscape needs. Browse our selection of tujas for privacy hedges, ornamental features, and garden borders." />
      </Helmet>
      <Toaster />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/products" element={<Products />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;