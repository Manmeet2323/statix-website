import React, { useState } from "react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Phone, Mail, MapPin, Star } from "lucide-react";

export default function StatixHomePage() {
  const [review, setReview] = useState({ name: '', text: '', photo: null });

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    alert("Review submitted and pending approval. Thank you!");
    setReview({ name: '', text: '', photo: null });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 p-6">
      {/* full JSX content omitted for brevity */}
      <footer className="border-t pt-6 text-sm">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="space-y-1">
            <p className="flex items-center gap-2"><Phone size={16} /> (204) 914-9963</p>
            <p className="flex items-center gap-2"><Mail size={16} /> statixcoatings@gmail.com</p>
            <p className="flex items-center gap-2"><MapPin size={16} /> Winnipeg, MB</p>
          </div>
          <p className="text-gray-500">&copy; {new Date().getFullYear()} Statix Custom Powder Coating</p>
        </div>
      </footer>
    </div>
  );
}
