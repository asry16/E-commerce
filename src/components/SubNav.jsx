import React from 'react';
import { useShop } from '../context/ShopContext';
import { Menu, Sparkles } from 'lucide-react';

export const SubNav = () => {
  const { setIsSideNavOpen, setSelectedCategory, selectedCategory } = useShop();

  const navLinks = [
    { label: "Today's Deals", cat: "all" },
    { label: "Electronics", cat: "electronics" },
    { label: "Computers", cat: "computers" },
    { label: "Video Games", cat: "gaming" },
    { label: "Home & Kitchen", cat: "home" },
    { label: "Fashion", cat: "fashion" },
    { label: "Books", cat: "books" },
    { label: "Registry", cat: "all" },
    { label: "Gift Cards", cat: "all" },
    { label: "Customer Service", cat: "all" }
  ];

  const handleNavClick = (cat) => {
    setSelectedCategory(cat);
    const catalog = document.getElementById('amazon-catalog');
    if (catalog) {
      catalog.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="header-subnav">
      <div className="subnav-left">
        <button 
          className="subnav-all-btn"
          onClick={() => setIsSideNavOpen(true)}
          title="Open Directory Menu"
        >
          <Menu size={18} />
          <span>All</span>
        </button>

        {navLinks.map((item, idx) => (
          <button
            key={idx}
            className={`subnav-link ${selectedCategory === item.cat ? 'active' : ''}`}
            onClick={() => handleNavClick(item.cat)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="subnav-right-banner">
        <Sparkles size={16} />
        <span>Shop Prime Big Deal Days Early Access</span>
      </div>
    </nav>
  );
};
