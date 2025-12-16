import React, { useState, useEffect } from "react";
import banner1 from "../../assets/banner-1.png";
import banner1Desktop from "../../assets/banner-1-desktop.png";
import banner2 from "../../assets/banner-2.png";
import banner3 from "../../assets/banner-3.png";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      subtitle: "Winter Collection 2024",
      title: "Elevate Your Style",
      description: "Discover the latest trends in winter fashion. Premium wool coats, scarves, and boots now available.",
      image: banner1,
      desktopImage: banner1Desktop,
      cta: "Shop Collection",
      color: "from-blue-900 to-slate-900",
      position: "object-top",
    },
    {
      id: 2,
      subtitle: "Smart Electronics",
      title: "Next Gen Tech",
      description: "Upgrade your lifestyle with our new range of smart home devices and wearables.",
      image: banner2, 
      cta: "Explore Tech",
      color: "from-purple-900 to-indigo-900",
    },
    {
      id: 3,
      subtitle: "Limited Time Offer",
      title: "Midnight Sale",
      description: "Up to 50% off on selected premium brands. Offer ends soon.",
      image: banner3,
      cta: "Grab Deal",
      color: "from-slate-900 to-black",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full relative group overflow-hidden bg-gray-900">
      <div 
         className="flex transition-transform duration-700 ease-in-out" 
         style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="w-full min-w-full relative h-[500px] lg:h-[700px] xl:h-[800px] flex items-center">
             {/* Background Image & Gradient */}
             <div className="absolute inset-0">
                <picture>
                    <source media="(min-width: 1024px)" srcSet={slide.desktopImage || slide.image} />
                    <img 
                      src={slide.image} 
                      alt={slide.title} 
                      className={`w-full h-full object-cover ${slide.position || 'object-center'}`}
                    />
                </picture>
                
                {/* Dynamic Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${slide.color} opacity-40 mix-blend-multiply`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
             </div>

             {/* Content */}
             <div className="container mx-auto px-6 relative z-10">
               <div className="max-w-2xl space-y-6">
                 <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-white/90 text-xs font-bold tracking-widest uppercase border border-white/20 animate-in slide-in-from-bottom-4 duration-700 fade-in">
                    {slide.subtitle}
                 </span>
                 <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight animate-in slide-in-from-bottom-8 duration-700 fade-in delay-100">
                   {slide.title}
                 </h1>
                 <p className="text-lg text-gray-200 leading-relaxed max-w-lg animate-in slide-in-from-bottom-8 duration-700 fade-in delay-200">
                   {slide.description}
                 </p>
                 <div className="pt-4 animate-in slide-in-from-bottom-8 duration-700 fade-in delay-300">
                   <button className="group bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-all flex items-center gap-2 shadow-xl hover:shadow-2xl hover:-translate-y-1">
                     {slide.cta}
                     <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                   </button>
                 </div>
               </div>
             </div>
          </div>
        ))}
      </div>

      {/* Navigation - Bottom Right */}
      <div className="absolute bottom-8 right-8 z-20 flex gap-4">
        <button 
          onClick={prevSlide}
          className="p-3 rounded-full border border-white/20 text-white hover:bg-white hover:text-slate-900 transition-all backdrop-blur-sm"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={nextSlide}
          className="p-3 rounded-full border border-white/20 text-white hover:bg-white hover:text-slate-900 transition-all backdrop-blur-sm"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Progress Bar / Indicators */}
      <div className="absolute bottom-8 left-8 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              currentSlide === index ? "w-12 bg-white" : "w-6 bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;