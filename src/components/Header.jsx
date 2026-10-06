import React from 'react';
import { useShop } from '../context/ShopContext';
import { CATEGORIES } from '../data/products';
import { 
  MapPin, 
  Search, 
  ShoppingCart, 
  X, 
  ChevronDown 
} from 'lucide-react';

export const Header = () => {
  const {
    deliveryLocation,
    setIsAddressModalOpen,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    cartTotalCount,
    setIsCartOpen,
    setIsOrdersOpen,
    orders,
    currency,
    setIsCurrencyModalOpen
  } = useShop();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const catalogElement = document.getElementById('amazon-catalog');
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="amazon-header">
      <div className="header-top">
        {/* Amazon Logo */}
        <div 
          className="header-logo-container" 
          onClick={() => {
            setSelectedCategory('all');
            setSearchQuery('');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          title="Amazon Home"
        >
          <div className="amazon-brand-logo">
            <span className="amazon-brand-name">
              amazon<span className="brand-dot-com">.com</span>
            </span>
            <svg className="amazon-smile" viewBox="0 0 100 24" fill="none">
              <path 
                d="M 5 8 Q 50 30 90 7" 
                stroke="#ff9900" 
                strokeWidth="3.2" 
                strokeLinecap="round" 
              />
              <path 
                d="M 85 4 L 94 8 L 86 13 Z" 
                fill="#ff9900" 
              />
            </svg>
          </div>
        </div>

        {/* Deliver To Pin */}
        <button 
          className="delivery-btn" 
          onClick={() => setIsAddressModalOpen(true)}
          title="Change delivery location"
        >
          <MapPin size={18} color="#cccccc" style={{ flexShrink: 0 }} />
          <div>
            <div className="delivery-sub">Deliver to Alex</div>
            <div className="delivery-main">{deliveryLocation.city} {deliveryLocation.zip}</div>
          </div>
        </button>

        {/* Search Bar */}
        <form className="search-container" onSubmit={handleSearchSubmit}>
          <select 
            className="search-category-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {CATEGORIES.map(cat => (
              <option key={cat.id} value={cat.id}>{cat.name}</option>
            ))}
          </select>

          <div className="search-input-wrapper">
            <input 
              type="text" 
              className="search-input"
              placeholder="Search Amazon products, electronics, gaming..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button 
                type="button" 
                className="search-clear-btn"
                onClick={() => setSearchQuery('')}
              >
                <X size={16} />
              </button>
            )}
          </div>

          <button type="submit" className="search-btn" title="Search">
            <Search size={20} />
          </button>
        </form>

        {/* Header Right Actions */}
        <div className="header-actions">
          {/* Language & Currency selector */}
          <div 
            className="nav-action-item" 
            onClick={() => setIsCurrencyModalOpen(true)}
            style={{ flexDirection: 'row', alignItems: 'center', gap: 4, cursor: 'pointer' }}
            title="Change Currency and Language"
          >
            <span style={{ fontSize: 16 }}>{currency === 'INR' ? '🇮🇳' : '🇺🇸'}</span>
            <span style={{ fontSize: 13, fontWeight: 700 }}>{currency === 'INR' ? 'INR (₹)' : 'USD ($)'}</span>
            <ChevronDown size={12} color="#aaa" />
          </div>

          {/* Account & Lists */}
          <div 
            className="nav-action-item"
            onClick={() => setIsOrdersOpen(true)}
            title="View Account"
          >
            <span className="action-sub">Hello, Alex</span>
            <span className="action-main">
              Account & Lists <ChevronDown size={12} color="#aaa" />
            </span>
          </div>

          {/* Returns & Orders */}
          <div 
            className="nav-action-item"
            onClick={() => setIsOrdersOpen(true)}
            title="View Orders History"
          >
            <span className="action-sub">Returns</span>
            <span className="action-main">
              & Orders {orders.length > 0 && <span style={{ color: '#febd69', fontSize: 11 }}>({orders.length})</span>}
            </span>
          </div>

          {/* Cart Button */}
          <div 
            className="cart-btn"
            onClick={() => setIsCartOpen(true)}
            title="Open Shopping Cart"
          >
            <div className="cart-icon-wrapper">
              <ShoppingCart size={32} color="#ffffff" />
              <span className="cart-count-badge">{cartTotalCount}</span>
            </div>
            <span className="cart-label">Cart</span>
          </div>
        </div>
      </div>
    </header>
  );
};
