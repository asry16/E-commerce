import React from 'react';
import { FOUR_GRID_SECTIONS } from '../data/products';
import { useShop } from '../context/ShopContext';

export const QuadrantGrid = () => {
  const { setSelectedCategory } = useShop();

  const handleCardClick = (category) => {
    setSelectedCategory(category);
    const catalog = document.getElementById('amazon-catalog');
    if (catalog) {
      catalog.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home-quadrant-container">
      {FOUR_GRID_SECTIONS.map((section) => (
        <div key={section.id} className="quadrant-card">
          <h2 className="quadrant-title">{section.title}</h2>
          
          <div className="quadrant-grid-2x2">
            {section.items.map((item, idx) => (
              <div 
                key={idx} 
                className="quadrant-subitem"
                onClick={() => handleCardClick(section.category)}
              >
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="quadrant-subitem-img" 
                />
                <span className="quadrant-subitem-label">{item.name}</span>
              </div>
            ))}
          </div>

          <a 
            href="#amazon-catalog" 
            className="quadrant-link"
            onClick={(e) => {
              e.preventDefault();
              handleCardClick(section.category);
            }}
          >
            {section.linkText}
          </a>
        </div>
      ))}
    </div>
  );
};
