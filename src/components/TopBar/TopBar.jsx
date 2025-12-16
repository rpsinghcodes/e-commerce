import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../../context/context";

import { Facebook, Twitter, Instagram, Youtube, MapPin } from "lucide-react";

const TopBar = () => {
  const { user } = useContext(CartContext);

  // Hide TopBar if user is logged in (Buyer or Seller)
  if (user.isUserLogedIn || user.isSellerLogedIn) {
    return null;
  }

  return (
    <div className="bg-slate-900 text-slate-300 text-xs py-2">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Left Side: Social / Contact */}
        <div className="flex items-center gap-4">
           <div className="flex items-center gap-3">
             <a href="#" className="hover:text-white transition-colors"><Facebook size={14} /></a>
             <a href="#" className="hover:text-white transition-colors"><Twitter size={14} /></a>
             <a href="#" className="hover:text-white transition-colors"><Instagram size={14} /></a>
             <a href="#" className="hover:text-white transition-colors"><Youtube size={14} /></a>
           </div>
           <span className="hidden sm:inline border-l border-slate-700 pl-4 ml-2">
              Welcome to SafeCart!
           </span>
        </div>

        {/* Right Side: Links */}
        <div className="flex items-center gap-6">
           <Link to="/trackingorder" className="hover:text-white transition-colors flex items-center gap-1">
              <MapPin size={14} /> Track Order
           </Link>
           <Link to="/becomeseller" className="hover:text-white transition-colors">
              Become a Seller
           </Link>
           <span className="hidden sm:inline text-slate-500">|</span>
           <span className="hidden sm:inline">Call Us: +1 123 456 7890</span>
        </div>
      </div>
    </div>
  );
};
export default TopBar;
