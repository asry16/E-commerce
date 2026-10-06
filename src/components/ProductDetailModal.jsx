import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { X, Star, Check, ShieldCheck, Truck, RotateCcw } from 'lucide-react';

export const ProductDetailModal = () => {
  const { selectedProduct, setSelectedProduct, addToCart, setIsCheckoutOpen, formatPrice } = useShop();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!selectedProduct) return null;

  const productPrice = formatPrice(selectedProduct.price);
  const origProductPrice = selectedProduct.originalPrice ? formatPrice(selectedProduct.originalPrice) : null;

  const images = selectedProduct.images && selectedProduct.images.length > 0
    ? selectedProduct.images
    : [selectedProduct.image];

  const handleBuyNow = () => {
    addToCart(selectedProduct, quantity);
    setSelectedProduct(null);
    setIsCheckoutOpen(true);
  };

  const handleAddToCart = () => {
    addToCart(selectedProduct, quantity);
  };

  return (
    <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
      <div className="product-detail-modal" onClick={(e) => e.stopPropagation()}>
        <button 
          className="modal-close-btn"
          onClick={() => setSelectedProduct(null)}
          title="Close product detail"
        >
          <X size={20} />
        </button>

        <div className="detail-modal-grid">
          {/* Left: Gallery Column */}
          <div className="gallery-column">
            <div className="thumbnails-list">
              {images.map((imgUrl, idx) => (
                <button
                  key={idx}
                  className={`thumbnail-btn ${selectedImageIndex === idx ? 'active' : ''}`}
                  onClick={() => setSelectedImageIndex(idx)}
                >
                  <img src={imgUrl} alt={`Thumbnail ${idx + 1}`} className="thumbnail-img" />
                </button>
              ))}
            </div>

            <div className="main-image-viewer">
              <img 
                src={images[selectedImageIndex] || selectedProduct.image} 
                alt={selectedProduct.title} 
              />
            </div>
          </div>

          {/* Center: Info Column */}
          <div className="info-column">
            <div className="detail-brand-link">
              Brand: <strong>{selectedProduct.brand}</strong>
            </div>

            <h1 className="detail-title">{selectedProduct.title}</h1>

            <div className="detail-rating-row">
              <div className="star-icons">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={16}
                    fill={star <= Math.floor(selectedProduct.rating) ? "#ffa41c" : "none"}
                    color="#ffa41c"
                  />
                ))}
              </div>
              <span style={{ fontSize: 13, fontWeight: 700, color: '#0f1111' }}>
                {selectedProduct.rating} out of 5
              </span>
              <span style={{ fontSize: 13, color: '#007185' }}>
                {selectedProduct.reviewsCount.toLocaleString()} global ratings
              </span>
            </div>

            {selectedProduct.badge && (
              <div style={{ marginBottom: 12 }}>
                <span className="product-badge choice" style={{ position: 'static' }}>
                  {selectedProduct.badge}
                </span>
              </div>
            )}

            <div className="detail-price-box">
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
                {selectedProduct.discountPercent > 0 && (
                  <span style={{ color: '#cc0c39', fontSize: 28, fontWeight: 300 }}>
                    -{selectedProduct.discountPercent}%
                  </span>
                )}
                <span style={{ fontSize: 30, fontWeight: 700, fontFamily: 'Outfit, sans-serif' }}>
                  {productPrice.formatted}
                </span>
              </div>

              {origProductPrice && (
                <div style={{ fontSize: 13, color: '#565959', marginTop: 4 }}>
                  Typical price: <span style={{ textDecoration: 'line-through' }}>{origProductPrice.formatted}</span>
                </div>
              )}

              <div style={{ display: 'flex', gap: 16, marginTop: 12, fontSize: 12, color: '#007185' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <RotateCcw size={14} /> 30-day refund & returns
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <ShieldCheck size={14} /> 2-year warranty included
                </span>
              </div>
            </div>

            <div>
              <h4 style={{ fontSize: 15, fontWeight: 700, marginBottom: 8 }}>About this item</h4>
              <p style={{ fontSize: 14, color: '#333', marginBottom: 12, lineHeight: 1.5 }}>
                {selectedProduct.description}
              </p>
              {selectedProduct.specs && (
                <ul className="detail-specs-list">
                  {selectedProduct.specs.map((spec, i) => (
                    <li key={i}>{spec}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Right: Buy Box Column */}
          <div className="buy-box">
            <div className="buy-box-price">{productPrice.formatted}</div>
            
            <div className="buy-box-delivery">
              {selectedProduct.prime && (
                <div className="prime-tag" style={{ marginBottom: 4 }}>
                  prime <Check size={13} strokeWidth={3} />
                </div>
              )}
              <div>FREE delivery <strong>{selectedProduct.deliveryTime}</strong></div>
              <div style={{ fontSize: 12, color: '#565959', marginTop: 2 }}>
                Order within 3 hrs 24 mins
              </div>
            </div>

            <div className="buy-box-stock">
              In Stock ({selectedProduct.stockCount} available)
            </div>

            <div className="buy-box-qty-select">
              <label htmlFor="qty-select">Quantity:</label>
              <select
                id="qty-select"
                className="qty-select"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
              >
                {[1, 2, 3, 4, 5].map(n => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
            </div>

            <div className="buy-box-buttons">
              <button className="btn-buy-box-cart" onClick={handleAddToCart}>
                Add to Cart
              </button>
              <button className="btn-buy-box-now" onClick={handleBuyNow}>
                Buy Now
              </button>
            </div>

            <div className="buy-box-meta-table">
              <div className="meta-row">
                <span>Ships from</span>
                <strong>Amazon.com</strong>
              </div>
              <div className="meta-row">
                <span>Sold by</span>
                <strong>{selectedProduct.brand} Official</strong>
              </div>
              <div className="meta-row">
                <span>Returns</span>
                <span>Eligible for Return, Refund or Replacement within 30 days</span>
              </div>
              <div className="meta-row">
                <span>Payment</span>
                <span>Secure transaction</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
