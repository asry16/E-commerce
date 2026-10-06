import React from 'react';
import { useShop } from '../context/ShopContext';
import { Globe } from 'lucide-react';

export const Footer = () => {
  const { setSelectedCategory, setSearchQuery, currency, setIsCurrencyModalOpen } = useShop();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="amazon-footer">
      <button className="back-to-top-btn" onClick={scrollToTop}>
        Back to top
      </button>

      <div className="footer-nav-grid">
        <div>
          <h4 className="footer-column-title">Get to Know Us</h4>
          <ul className="footer-column-links">
            <li><a href="#about" className="footer-link">Careers</a></li>
            <li><a href="#about" className="footer-link">Amazon Newsletter</a></li>
            <li><a href="#about" className="footer-link">About Amazon</a></li>
            <li><a href="#about" className="footer-link">Accessibility</a></li>
            <li><a href="#about" className="footer-link">Sustainability</a></li>
            <li><a href="#about" className="footer-link">Amazon Science</a></li>
          </ul>
        </div>

        <div>
          <h4 className="footer-column-title">Make Money with Us</h4>
          <ul className="footer-column-links">
            <li><a href="#sell" className="footer-link">Sell products on Amazon</a></li>
            <li><a href="#sell" className="footer-link">Sell on Amazon Business</a></li>
            <li><a href="#sell" className="footer-link">Sell apps on Amazon</a></li>
            <li><a href="#sell" className="footer-link">Become an Affiliate</a></li>
            <li><a href="#sell" className="footer-link">Advertise Your Products</a></li>
            <li><a href="#sell" className="footer-link">Self-Publish with Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="footer-column-title">Amazon Payment Products</h4>
          <ul className="footer-column-links">
            <li><a href="#pay" className="footer-link">Amazon Visa</a></li>
            <li><a href="#pay" className="footer-link">Amazon Store Card</a></li>
            <li><a href="#pay" className="footer-link">Amazon Secured Card</a></li>
            <li><a href="#pay" className="footer-link">Amazon Business Card</a></li>
            <li><a href="#pay" className="footer-link">Shop with Points</a></li>
            <li><a href="#pay" className="footer-link">Reload Your Balance</a></li>
          </ul>
        </div>

        <div>
          <h4 className="footer-column-title">Let Us Help You</h4>
          <ul className="footer-column-links">
            <li><a href="#help" className="footer-link">Amazon and COVID-19</a></li>
            <li><a href="#help" className="footer-link">Your Account</a></li>
            <li><a href="#help" className="footer-link">Your Orders</a></li>
            <li><a href="#help" className="footer-link">Shipping Rates & Policies</a></li>
            <li><a href="#help" className="footer-link">Returns & Replacements</a></li>
            <li><a href="#help" className="footer-link">Manage Your Content and Devices</a></li>
            <li><a href="#help" className="footer-link">Help & Customer Service</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 16, marginBottom: 12 }}>
          <div 
            style={{ cursor: 'pointer' }}
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
              scrollToTop();
            }}
          >
            <span className="amazon-brand-name" style={{ fontSize: 20 }}>
              amazon<span className="brand-dot-com">.com</span>
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 6, border: '1px solid #848688', padding: '6px 12px', borderRadius: 4, fontSize: 13, color: '#ccc' }}>
            <Globe size={15} />
            <span>English</span>
          </div>

          <div 
            onClick={() => setIsCurrencyModalOpen(true)}
            style={{ border: '1px solid #848688', padding: '6px 12px', borderRadius: 4, fontSize: 13, color: '#ccc', cursor: 'pointer', transition: 'all 0.15s' }}
            title="Click to switch currency (USD / INR)"
          >
            <span>{currency === 'INR' ? '₹ INR - Indian Rupee' : '$ USD - U.S. Dollar'}</span>
          </div>

          <div 
            onClick={() => setIsCurrencyModalOpen(true)}
            style={{ border: '1px solid #848688', padding: '6px 12px', borderRadius: 4, fontSize: 13, color: '#ccc', cursor: 'pointer' }}
          >
            <span>{currency === 'INR' ? '🇮🇳 India' : '🇺🇸 United States'}</span>
          </div>
        </div>

        <div>
          Conditions of Use &nbsp;|&nbsp; Privacy Notice &nbsp;|&nbsp; Consumer Health Data Privacy &nbsp;|&nbsp; Your Ads Privacy Choices
        </div>
        <div style={{ marginTop: 6, color: '#777' }}>
          © 1996-2026, Amazon.com, Inc. or its affiliates. Built for pair-programming demonstration.
        </div>
      </div>
    </footer>
  );
};
