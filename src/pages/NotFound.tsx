import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 py-12 text-center">
      <Helmet>
        <title>Page Not Found - Tujka Kock</title>
      </Helmet>

      <div className="space-y-6 max-w-md">
        <div className="text-green-700 text-7xl font-bold">404</div>
        
        <h1 className="text-3xl font-bold text-gray-900">Page Not Found</h1>
        
        <p className="text-lg text-gray-600">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        
        <div className="flex justify-center">
          <Button asChild className="bg-green-700 hover:bg-green-800">
            <Link to="/" className="flex items-center">
              <Home className="mr-2 h-4 w-4" /> Return to Homepage
            </Link>
          </Button>
        </div>
      </div>
      
      <div className="mt-12 text-sm text-gray-500">
        If you believe this is a mistake, please contact our support team.
      </div>
    </div>
  );
}