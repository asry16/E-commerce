import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { X, Lock, CheckCircle, CreditCard, Truck, MapPin } from 'lucide-react';

export const CheckoutModal = () => {
  const {
    isCheckoutOpen,
    setIsCheckoutOpen,
    cart,
    cartSubtotalUSD,
    deliveryLocation,
    placeOrder,
    currency,
    formatPrice,
    INR_RATE
  } = useShop();

  const [shippingSpeed, setShippingSpeed] = useState('prime'); // 'prime' | 'nextday'
  const [paymentMethod, setPaymentMethod] = useState(currency === 'INR' ? 'upi' : 'visa');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isCheckoutOpen) return null;

  // Currency specific costs
  const isINR = currency === 'INR';
  const shippingCostValue = isINR ? (shippingSpeed === 'nextday' ? 149 : 0) : (shippingSpeed === 'nextday' ? 4.99 : 0.00);
  const itemsTotalValue = isINR ? Math.round(cartSubtotalUSD * INR_RATE) : Number(cartSubtotalUSD.toFixed(2));
  const taxRate = isINR ? 0.18 : 0.0825; // 18% GST in India, 8.25% Tax in US
  const taxLabel = isINR ? 'Estimated GST (18%)' : 'Estimated tax to be collected';
  const estimatedTaxValue = isINR ? Math.round(itemsTotalValue * taxRate) : Number((itemsTotalValue * taxRate).toFixed(2));
  const orderTotalValue = itemsTotalValue + shippingCostValue + estimatedTaxValue;

  const formattedOrderTotal = isINR ? `₹${orderTotalValue.toLocaleString('en-IN')}` : `$${orderTotalValue.toFixed(2)}`;
  const formattedShipping = shippingCostValue === 0 ? 'FREE' : (isINR ? `₹${shippingCostValue}` : `$${shippingCostValue.toFixed(2)}`);
  const formattedItemsTotal = isINR ? `₹${itemsTotalValue.toLocaleString('en-IN')}` : `$${itemsTotalValue.toFixed(2)}`;
  const formattedTax = isINR ? `₹${estimatedTaxValue.toLocaleString('en-IN')}` : `$${estimatedTaxValue.toFixed(2)}`;

  const handlePlaceOrder = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);

      let deliveryMethodLabel = '';
      if (isINR) {
        deliveryMethodLabel = shippingSpeed === 'nextday' 
          ? "Next-Day Priority Delivery (₹149)" 
          : "FREE Prime Delivery";
      } else {
        deliveryMethodLabel = shippingSpeed === 'nextday' 
          ? "Next-Day Priority Delivery ($4.99)" 
          : "FREE Prime Two-Day Delivery";
      }

      let paymentMethodLabel = '';
      if (isINR) {
        if (paymentMethod === 'upi') paymentMethodLabel = "Amazon Pay UPI / NetBanking";
        else if (paymentMethod === 'icici') paymentMethodLabel = "Amazon Pay ICICI Bank Credit Card (...4419)";
        else paymentMethodLabel = "Cash / Pay on Delivery";
      } else {
        if (paymentMethod === 'visa') paymentMethodLabel = "Amazon Prime Rewards Visa Card (...8842)";
        else if (paymentMethod === 'amazonpay') paymentMethodLabel = "Amazon Pay Balance";
        else paymentMethodLabel = "Cash on Delivery";
      }

      placeOrder({
        shippingAddress: {
          fullName: "Alex Morgan",
          street: isINR ? "Flat 402, Sea View Apartments, Nariman Point" : "2121 7th Avenue, Apt 4B",
          city: deliveryLocation.city,
          state: isINR ? "MH" : "WA",
          zip: deliveryLocation.zip
        },
        deliveryMethod: deliveryMethodLabel,
        paymentMethod: paymentMethodLabel,
        totalFormatted: formattedOrderTotal,
        totalUSD: (orderTotalValue / (isINR ? INR_RATE : 1))
      });
    }, 900);
  };

  return (
    <div className="modal-overlay" onClick={() => !isSubmitting && setIsCheckoutOpen(false)}>
      <div className="checkout-modal" onClick={(e) => e.stopPropagation()}>
        {/* Checkout Header */}
        <div className="checkout-header">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span className="amazon-brand-name" style={{ color: '#131921', fontSize: 26 }}>
                amazon<span style={{ fontSize: 13, color: '#f90' }}>.{isINR ? 'in' : 'checkout'}</span>
              </span>
            </div>
            <div style={{ fontSize: 13, color: '#565959', display: 'flex', alignItems: 'center', gap: 4, marginTop: 4 }}>
              <Lock size={14} color="#067d62" /> 256-bit Secure Encryption Checkout ({currency})
            </div>
          </div>

          <button 
            className="modal-close-btn"
            style={{ position: 'static' }}
            disabled={isSubmitting}
            onClick={() => setIsCheckoutOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        <div className="checkout-grid">
          {/* Left Column: Multi-Step Flow */}
          <div>
            {/* Step 1: Shipping Address */}
            <div className="checkout-step-card">
              <div className="step-header">
                <span className="step-num">1</span>
                <span className="step-title">Choose a delivery address</span>
              </div>
              <div className="address-option-card selected">
                <MapPin size={20} color="#ff9900" style={{ marginTop: 2, flexShrink: 0 }} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14 }}>Alex Morgan (Default)</div>
                  <div style={{ fontSize: 13, color: '#333' }}>
                    {isINR ? "Flat 402, Sea View Apartments, Nariman Point" : "2121 7th Avenue, Apt 4B"}
                  </div>
                  <div style={{ fontSize: 13, color: '#333' }}>
                    {deliveryLocation.city}, {isINR ? 'Maharashtra' : 'WA'} {deliveryLocation.zip}
                  </div>
                  <div style={{ fontSize: 12, color: '#007185', marginTop: 4 }}>
                    Phone: {isINR ? '+91 98201 55019' : '(206) 555-0192'}
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Payment Method */}
            <div className="checkout-step-card">
              <div className="step-header">
                <span className="step-num">2</span>
                <span className="step-title">Select a payment method ({currency})</span>
              </div>

              {isINR ? (
                <>
                  <div 
                    className={`payment-method-row ${paymentMethod === 'upi' ? 'selected' : ''}`}
                    onClick={() => setPaymentMethod('upi')}
                  >
                    <input 
                      type="radio" 
                      name="payment" 
                      checked={paymentMethod === 'upi'} 
                      onChange={() => setPaymentMethod('upi')} 
                    />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 14, fontWeight: 600 }}>
                        Amazon Pay UPI / NetBanking / GPay
                      </div>
                      <div style={{ fontSize: 12, color: '#067d62', fontWeight: 600 }}>
                        Instant ₹50 cashback with Amazon Pay UPI
                      </div>
                    </div>
                  </div>

                  <div 
                    className={`payment-method-row ${paymentMethod === 'icici' ? 'selected' : ''}`}
                    onClick={() => setPaymentMethod('icici')}
                  >
                    <input 
                      type="radio" 
                      name="payment" 
                      checked={paymentMethod === 'icici'} 
                      onChange={() => setPaymentMethod('icici')} 
                    />
                    <CreditCard size={20} color="#007185" />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 14, fontWeight: 600 }}>
                        Amazon Pay ICICI Bank Credit Card (...4419)
                      </div>
                      <div style={{ fontSize: 12, color: '#565959' }}>
                        Earn unlimited 5% reward points on this order
                      </div>
                    </div>
                  </div>

                  <div 
                    className={`payment-method-row ${paymentMethod === 'cod' ? 'selected' : ''}`}
                    onClick={() => setPaymentMethod('cod')}
                  >
                    <input 
                      type="radio" 
                      name="payment" 
                      checked={paymentMethod === 'cod'} 
                      onChange={() => setPaymentMethod('cod')} 
                    />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 14, fontWeight: 600 }}>Cash on Delivery / Pay on Delivery</div>
                      <div style={{ fontSize: 12, color: '#565959' }}>Scan UPI QR or pay cash to delivery associate</div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div 
                    className={`payment-method-row ${paymentMethod === 'visa' ? 'selected' : ''}`}
                    onClick={() => setPaymentMethod('visa')}
                  >
                    <input 
                      type="radio" 
                      name="payment" 
                      checked={paymentMethod === 'visa'} 
                      onChange={() => setPaymentMethod('visa')} 
                    />
                    <CreditCard size={20} color="#007185" />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 14, fontWeight: 600 }}>
                        Amazon Prime Rewards Visa Signature (...8842)
                      </div>
                      <div style={{ fontSize: 12, color: '#565959' }}>
                        Earn 5% back on this order
                      </div>
                    </div>
                  </div>

                  <div 
                    className={`payment-method-row ${paymentMethod === 'amazonpay' ? 'selected' : ''}`}
                    onClick={() => setPaymentMethod('amazonpay')}
                  >
                    <input 
                      type="radio" 
                      name="payment" 
                      checked={paymentMethod === 'amazonpay'} 
                      onChange={() => setPaymentMethod('amazonpay')} 
                    />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 14, fontWeight: 600 }}>
                        Amazon Pay Store Credit Balance ($1,250.00 available)
                      </div>
                    </div>
                  </div>

                  <div 
                    className={`payment-method-row ${paymentMethod === 'cod' ? 'selected' : ''}`}
                    onClick={() => setPaymentMethod('cod')}
                  >
                    <input 
                      type="radio" 
                      name="payment" 
                      checked={paymentMethod === 'cod'} 
                      onChange={() => setPaymentMethod('cod')} 
                    />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 14, fontWeight: 600 }}>Pay on Delivery / Cash</div>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Step 3: Review items & Delivery Speed */}
            <div className="checkout-step-card">
              <div className="step-header">
                <span className="step-num">3</span>
                <span className="step-title">Review items and delivery speed</span>
              </div>

              <div style={{ marginBottom: 16 }}>
                <div 
                  className={`delivery-speed-option ${shippingSpeed === 'prime' ? 'selected' : ''}`}
                  onClick={() => setShippingSpeed('prime')}
                >
                  <div>
                    <strong style={{ color: '#00a8e1' }}>FREE Prime Delivery</strong>
                    <div style={{ fontSize: 12, color: '#565959' }}>Estimated: In 2 business days</div>
                  </div>
                  <span style={{ fontWeight: 700, color: '#067d62' }}>{isINR ? '₹0' : '$0.00'}</span>
                </div>

                <div 
                  className={`delivery-speed-option ${shippingSpeed === 'nextday' ? 'selected' : ''}`}
                  onClick={() => setShippingSpeed('nextday')}
                >
                  <div>
                    <strong>Next-Day Priority Delivery</strong>
                    <div style={{ fontSize: 12, color: '#565959' }}>Estimated: Tomorrow by 8:00 PM</div>
                  </div>
                  <span style={{ fontWeight: 700 }}>{isINR ? '₹149' : '$4.99'}</span>
                </div>
              </div>

              {/* Items preview list */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {cart.map(item => (
                  <div key={item.product.id} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <img 
                      src={item.product.image} 
                      alt={item.product.title} 
                      style={{ width: 44, height: 44, objectFit: 'contain', background: '#fafafa', borderRadius: 4 }} 
                    />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 13, fontWeight: 600, color: '#111' }}>
                        {item.product.title.slice(0, 50)}...
                      </div>
                      <div style={{ fontSize: 12, color: '#565959' }}>
                        Qty: {item.quantity} · {formatPrice(item.product.price * item.quantity).formatted}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Order Summary Box */}
          <div>
            <div className="order-summary-box">
              <button 
                className="place-order-btn"
                onClick={handlePlaceOrder}
                disabled={isSubmitting || cart.length === 0}
                style={{ marginTop: 0, marginBottom: 16 }}
              >
                {isSubmitting ? "Processing Order..." : "Place your order"}
              </button>

              <div style={{ fontSize: 11, color: '#565959', textAlign: 'center', marginBottom: 16 }}>
                By placing your order, you agree to Amazon's conditions of use and privacy policy.
              </div>

              <h3 className="summary-heading">Order Summary</h3>

              <div className="summary-line">
                <span>Items ({cart.reduce((c, i) => c + i.quantity, 0)}):</span>
                <span>{formattedItemsTotal}</span>
              </div>

              <div className="summary-line">
                <span>Delivery:</span>
                <span>{formattedShipping}</span>
              </div>

              <div className="summary-line">
                <span>{taxLabel}:</span>
                <span>{formattedTax}</span>
              </div>

              <div className="summary-line total-line">
                <span>Order Total:</span>
                <span>{formattedOrderTotal}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
