import React from 'react';
import { useShop } from '../context/ShopContext';
import { CheckCircle2, PackageCheck, Truck, Home, ArrowRight } from 'lucide-react';

export const OrderConfirmationModal = () => {
  const {
    lastPlacedOrder,
    setLastPlacedOrder,
    setIsOrdersOpen
  } = useShop();

  if (!lastPlacedOrder) return null;

  const handleGoToOrders = () => {
    setLastPlacedOrder(null);
    setIsOrdersOpen(true);
  };

  return (
    <div className="modal-overlay" onClick={() => setLastPlacedOrder(null)}>
      <div className="order-confirmation-modal" onClick={(e) => e.stopPropagation()}>
        <div className="confirmation-header">
          <div className="success-icon-badge">
            <CheckCircle2 size={40} />
          </div>
          <h2 style={{ fontSize: 26, fontWeight: 800, color: '#0f1111' }}>
            Order placed, thanks Alex!
          </h2>
          <div className="confirmation-order-id">
            Confirmation will be sent to your email. Order #{lastPlacedOrder.orderId}
          </div>
        </div>

        {/* Delivery Progress Bar */}
        <div style={{ background: '#f8fafc', padding: 20, borderRadius: 8, border: '1px solid #e2e8f0', marginBottom: 24 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <span style={{ fontSize: 15, fontWeight: 700, color: '#067d62' }}>
              {lastPlacedOrder.estimatedDelivery}
            </span>
            <span style={{ fontSize: 13, color: '#565959' }}>
              Carrier: Amazon Logistics (TBA)
            </span>
          </div>

          <div className="delivery-timeline">
            <div className="timeline-line">
              <div className="timeline-line-fill" />
            </div>

            <div className="timeline-step">
              <div className="step-indicator">
                <CheckCircle2 size={16} />
              </div>
              <span style={{ fontSize: 12, fontWeight: 600 }}>Ordered</span>
            </div>

            <div className="timeline-step">
              <div className="step-indicator">
                <PackageCheck size={16} />
              </div>
              <span style={{ fontSize: 12, fontWeight: 600 }}>Shipped</span>
            </div>

            <div className="timeline-step">
              <div className="step-indicator pending">
                <Truck size={16} />
              </div>
              <span style={{ fontSize: 12, color: '#888' }}>Out for delivery</span>
            </div>

            <div className="timeline-step">
              <div className="step-indicator pending">
                <Home size={16} />
              </div>
              <span style={{ fontSize: 12, color: '#888' }}>Delivered</span>
            </div>
          </div>
        </div>

        {/* Order Details Breakdown */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 24 }}>
          <div style={{ padding: 16, background: '#fafafa', borderRadius: 6, border: '1px solid #eee' }}>
            <h4 style={{ fontSize: 14, fontWeight: 700, marginBottom: 6 }}>Shipping Address</h4>
            <div style={{ fontSize: 13, color: '#444', lineHeight: 1.4 }}>
              <div>{lastPlacedOrder.shippingAddress?.fullName}</div>
              <div>{lastPlacedOrder.shippingAddress?.street}</div>
              <div>{lastPlacedOrder.shippingAddress?.city}, {lastPlacedOrder.shippingAddress?.state} {lastPlacedOrder.shippingAddress?.zip}</div>
            </div>
          </div>

          <div style={{ padding: 16, background: '#fafafa', borderRadius: 6, border: '1px solid #eee' }}>
            <h4 style={{ fontSize: 14, fontWeight: 700, marginBottom: 6 }}>Payment & Total</h4>
            <div style={{ fontSize: 13, color: '#444', lineHeight: 1.4 }}>
              <div>Method: {lastPlacedOrder.paymentMethod}</div>
              <div>Speed: {lastPlacedOrder.deliveryMethod}</div>
              <div style={{ fontWeight: 800, marginTop: 4, color: '#b12704', fontSize: 15 }}>
                Total Paid: {lastPlacedOrder.totalFormatted || `$${lastPlacedOrder.total?.toFixed(2)}`}
              </div>
            </div>
          </div>
        </div>

        {/* Ordered items preview */}
        <div style={{ marginBottom: 28 }}>
          <h4 style={{ fontSize: 15, fontWeight: 700, marginBottom: 12 }}>Items in this shipment</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {lastPlacedOrder.items.map((it, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 14, borderBottom: '1px solid #f0f0f0', paddingBottom: 10 }}>
                <img 
                  src={it.product.image} 
                  alt={it.product.title} 
                  style={{ width: 50, height: 50, objectFit: 'contain', background: '#fafafa', borderRadius: 4 }} 
                />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: '#111' }}>{it.product.title}</div>
                  <div style={{ fontSize: 12, color: '#565959' }}>
                    Qty: {it.quantity} · {it.formattedPriceAtPurchase || `$${it.priceAtPurchase?.toFixed(2)}`} each
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end' }}>
          <button 
            className="quick-view-btn" 
            onClick={handleGoToOrders}
            style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '10px 18px' }}
          >
            <span>View in Your Orders</span>
            <ArrowRight size={16} />
          </button>
          <button 
            className="add-to-cart-btn" 
            onClick={() => setLastPlacedOrder(null)}
            style={{ maxWidth: 220, padding: '10px 24px' }}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};
