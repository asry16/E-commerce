import React from 'react';
import { useShop } from '../context/ShopContext';
import { X, UserCircle, ChevronRight } from 'lucide-react';
import { CATEGORIES } from '../data/products';

export const SideNavDrawer = () => {
  const { isSideNavOpen, setIsSideNavOpen, setSelectedCategory, setIsOrdersOpen } = useShop();

  if (!isSideNavOpen) return null;

  const handleCategorySelect = (catId) => {
    setSelectedCategory(catId);
    setIsSideNavOpen(false);
    const catalog = document.getElementById('amazon-catalog');
    if (catalog) {
      catalog.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="side-drawer-overlay" onClick={() => setIsSideNavOpen(false)}>
      <div className="side-drawer" onClick={(e) => e.stopPropagation()}>
        <div className="side-drawer-header">
          <UserCircle size={28} />
          <span>Hello, Alex</span>
          <button 
            style={{ marginLeft: 'auto', color: '#fff' }} 
            onClick={() => setIsSideNavOpen(false)}
          >
            <X size={22} />
          </button>
        </div>

        <div className="side-drawer-section">
          <div className="side-drawer-title">Digital Content & Devices</div>
          <div className="side-drawer-item" onClick={() => handleCategorySelect('books')}>
            <span>Amazon Kindle & Books</span>
            <ChevronRight size={16} color="#888" />
          </div>
          <div className="side-drawer-item" onClick={() => handleCategorySelect('electronics')}>
            <span>Amazon Echo & Smart Home</span>
            <ChevronRight size={16} color="#888" />
          </div>
          <div className="side-drawer-item" onClick={() => handleCategorySelect('gaming')}>
            <span>Prime Gaming & Luna</span>
            <ChevronRight size={16} color="#888" />
          </div>
        </div>

        <div className="side-drawer-section">
          <div className="side-drawer-title">Shop by Department</div>
          {CATEGORIES.map(cat => (
            <div 
              key={cat.id} 
              className="side-drawer-item"
              onClick={() => handleCategorySelect(cat.id)}
            >
              <span>{cat.name}</span>
              <ChevronRight size={16} color="#888" />
            </div>
          ))}
        </div>

        <div className="side-drawer-section">
          <div className="side-drawer-title">Programs & Features</div>
          <div className="side-drawer-item" onClick={() => { setIsSideNavOpen(false); setIsOrdersOpen(true); }}>
            <span>Your Orders & Tracking</span>
            <ChevronRight size={16} color="#888" />
          </div>
          <div className="side-drawer-item" onClick={() => handleCategorySelect('all')}>
            <span>Today's Deals</span>
            <ChevronRight size={16} color="#888" />
          </div>
          <div className="side-drawer-item" onClick={() => handleCategorySelect('all')}>
            <span>Amazon Prime Member Perks</span>
            <ChevronRight size={16} color="#888" />
          </div>
        </div>

        <div className="side-drawer-section">
          <div className="side-drawer-title">Help & Settings</div>
          <div className="side-drawer-item" onClick={() => { setIsSideNavOpen(false); setIsOrdersOpen(true); }}>
            <span>Your Account</span>
          </div>
          <div className="side-drawer-item">
            <span>Customer Service</span>
          </div>
          <div className="side-drawer-item" onClick={() => setIsSideNavOpen(false)}>
            <span>Sign Out</span>
          </div>
        </div>
      </div>
    </div>
  );
};
