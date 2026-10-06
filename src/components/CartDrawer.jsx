import React from 'react';
import { useShop } from '../context/ShopContext';
import { X, Trash2, ShoppingBag, CheckCircle2 } from 'lucide-react';

export const CartDrawer = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cart,
    removeFromCart,
    updateQuantity,
    cartSubtotalUSD,
    cartTotalCount,
    freeShippingThresholdUSD,
    freeShippingDifferenceUSD,
    setIsCheckoutOpen,
    currency,
    formatPrice,
    INR_RATE
  } = useShop();

  if (!isCartOpen) return null;

  const isFreeShipping = freeShippingDifferenceUSD === 0;
  const progressPercent = Math.min(100, (cartSubtotalUSD / freeShippingThresholdUSD) * 100);

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const formattedDifference = currency === 'INR'
    ? `₹${Math.round(freeShippingDifferenceUSD * INR_RATE).toLocaleString('en-IN')}`
    : `$${freeShippingDifferenceUSD.toFixed(2)}`;

  return (
    <div className="cart-drawer-overlay" onClick={() => setIsCartOpen(false)}>
      <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
        {/* Drawer Header */}
        <div className="cart-drawer-header">
          <div className="cart-drawer-title">
            <ShoppingBag size={20} color="#ff9900" />
            <span>Shopping Cart ({cartTotalCount} items)</span>
          </div>
          <button 
            className="modal-close-btn" 
            style={{ position: 'static' }}
            onClick={() => setIsCartOpen(false)}
          >
            <X size={18} />
          </button>
        </div>

        {/* Free Shipping Progress Meter */}
        <div className="free-shipping-bar-container">
          <div className="shipping-status-text">
            {isFreeShipping ? (
              <>
                <CheckCircle2 size={16} color="#067d62" />
                <span>Your order qualifies for <strong>FREE Prime Delivery!</strong></span>
              </>
            ) : (
              <span>
                Add <strong>{formattedDifference}</strong> more to get <strong>FREE Shipping</strong>
              </span>
            )}
          </div>
          <div className="shipping-progress-track">
            <div 
              className="shipping-progress-fill" 
              style={{ width: `${progressPercent}%` }} 
            />
          </div>
        </div>

        {/* Scrollable Cart Items */}
        <div className="cart-items-scrollable">
          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '40px 20px', color: '#666' }}>
              <ShoppingBag size={48} strokeWidth={1} style={{ margin: '0 auto 12px auto', color: '#999' }} />
              <h3 style={{ fontSize: 18, color: '#111', marginBottom: 8 }}>Your Amazon Cart is empty</h3>
              <p style={{ fontSize: 13, marginBottom: 20 }}>
                Check out today's recommendations and deals to start shopping!
              </p>
              <button 
                className="add-to-cart-btn"
                onClick={() => setIsCartOpen(false)}
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            cart.map(item => (
              <div key={item.product.id} className="cart-item-row">
                <img 
                  src={item.product.image} 
                  alt={item.product.title} 
                  className="cart-item-img" 
                />

                <div className="cart-item-details">
                  <h4 className="cart-item-title" title={item.product.title}>
                    {item.product.title}
                  </h4>
                  <div className="cart-item-price">
                    {formatPrice(item.product.price).formatted}
                  </div>

                  <div className="cart-item-controls">
                    <div className="qty-counter">
                      <button 
                        className="qty-btn"
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      >
                        -
                      </button>
                      <span className="qty-val">{item.quantity}</span>
                      <button 
                        className="qty-btn"
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>

                    <button 
                      className="item-delete-btn"
                      onClick={() => removeFromCart(item.product.id)}
                      title="Delete item"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer with subtotal and checkout */}
        {cart.length > 0 && (
          <div className="cart-drawer-footer">
            <div className="subtotal-row">
              <span>Subtotal ({cartTotalCount} items):</span>
              <span className="subtotal-amount">
                {formatPrice(cartSubtotalUSD).formatted}
              </span>
            </div>

            <button 
              className="checkout-btn"
              onClick={handleProceedToCheckout}
            >
              Proceed to checkout ({cartTotalCount} items)
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
