import React, { useState, useEffect } from 'react';
import { HERO_SLIDES } from '../data/products';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { setSelectedCategory } = useShop();

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleCta = (cat) => {
    setSelectedCategory(cat);
    const catalog = document.getElementById('amazon-catalog');
    if (catalog) {
      catalog.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hero-slider">
      {HERO_SLIDES.map((slide, idx) => (
        <div 
          key={slide.id} 
          className={`hero-slide ${idx === currentSlide ? 'active' : ''}`}
        >
          <img 
            src={slide.image} 
            alt={slide.title} 
            className="hero-bg-image" 
          />
          <div className="hero-gradient-overlay" />

          <div className="hero-content">
            <span className="hero-badge">{slide.badge}</span>
            <h1 className="hero-title">{slide.title}</h1>
            <p className="hero-subtitle">{slide.subtitle}</p>
            <button 
              className="hero-cta-btn"
              onClick={() => handleCta(slide.categoryFilter)}
            >
              {slide.cta}
            </button>
          </div>
        </div>
      ))}

      <button className="hero-nav-arrow hero-prev" onClick={prevSlide} title="Previous slide">
        <ChevronLeft size={36} />
      </button>

      <button className="hero-nav-arrow hero-next" onClick={nextSlide} title="Next slide">
        <ChevronRight size={36} />
      </button>
    </div>
  );
};
