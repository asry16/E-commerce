import React from 'react';
import { useShop } from '../context/ShopContext';
import { Star, Check, Eye } from 'lucide-react';

export const ProductCard = ({ product }) => {
  const { addToCart, setSelectedProduct, formatPrice } = useShop();

  const renderStars = (rating) => {
    return (
      <div className="star-icons">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={14}
            fill={star <= Math.floor(rating) ? "#ffa41c" : (star - rating < 1 ? "#ffa41c" : "none")}
            color="#ffa41c"
          />
        ))}
      </div>
    );
  };

  const priceData = formatPrice(product.price);
  const origPriceData = product.originalPrice ? formatPrice(product.originalPrice) : null;

  const getBadgeClass = (badge) => {
    if (!badge) return '';
    if (badge.toLowerCase().includes('best seller')) return 'bestseller';
    if (badge.toLowerCase().includes('choice')) return 'choice';
    return 'deal';
  };

  return (
    <div className="product-card">
      {product.badge && (
        <span className={`product-badge ${getBadgeClass(product.badge)}`}>
          {product.badge}
        </span>
      )}

      <div 
        className="product-card-img-wrapper"
        onClick={() => setSelectedProduct(product)}
        title="View product details"
      >
        <img 
          src={product.image} 
          alt={product.title} 
          className="product-card-img" 
          loading="lazy"
        />
      </div>

      <div className="product-info-column">
        <div className="product-card-brand">{product.brand}</div>
        <h3 
          className="product-card-title" 
          onClick={() => setSelectedProduct(product)}
          title={product.title}
        >
          {product.title}
        </h3>

        <div className="product-card-rating">
          {renderStars(product.rating)}
          <span className="rating-count">
            {product.rating} ({product.reviewsCount.toLocaleString()})
          </span>
        </div>

        <div className="product-card-price-row">
          <div className="amazon-price">
            <span className="price-currency">{priceData.symbol}</span>
            <span className="price-whole">{priceData.whole}</span>
            {priceData.symbol === '$' && (
              <span className="price-fraction">{priceData.fraction}</span>
            )}
          </div>

          {origPriceData && (
            <span className="product-original-price">
              {origPriceData.formatted}
            </span>
          )}

          {product.discountPercent > 0 && (
            <span className="product-discount-pill">
              -{product.discountPercent}%
            </span>
          )}
        </div>

        <div className="product-delivery-info">
          {product.prime && (
            <span className="prime-tag">
              prime <Check size={12} strokeWidth={3} />
            </span>
          )}
          <span>Get it <strong>{product.deliveryTime}</strong></span>
        </div>
      </div>

      <div className="product-card-actions">
        <button 
          className="add-to-cart-btn"
          onClick={() => addToCart(product, 1)}
        >
          Add to Cart
        </button>
        <button 
          className="quick-view-btn"
          onClick={() => setSelectedProduct(product)}
          title="Quick look preview"
        >
          <Eye size={15} />
        </button>
      </div>
    </div>
  );
};
