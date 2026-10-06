import React from 'react';
import { useShop } from '../context/ShopContext';
import { X, Package, RotateCcw, Search, ExternalLink } from 'lucide-react';

export const OrdersHistoryModal = () => {
  const { isOrdersOpen, setIsOrdersOpen, orders, addToCart } = useShop();

  if (!isOrdersOpen) return null;

  return (
    <div className="modal-overlay" onClick={() => setIsOrdersOpen(false)}>
      <div className="product-detail-modal" style={{ maxWidth: 860, padding: 32 }} onClick={(e) => e.stopPropagation()}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20, borderBottom: '1px solid #e7e7e7', paddingBottom: 16 }}>
          <div>
            <h2 style={{ fontSize: 24, fontWeight: 700 }}>Your Orders</h2>
            <div style={{ fontSize: 13, color: '#565959', marginTop: 4 }}>
              Review past purchases, delivery trackings and reorder items
            </div>
          </div>

          <button 
            className="modal-close-btn"
            style={{ position: 'static' }}
            onClick={() => setIsOrdersOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        {orders.length === 0 ? (
          <div style={{ textAlign: 'center', padding: 40, color: '#666' }}>
            <Package size={48} strokeWidth={1} style={{ margin: '0 auto 12px auto', color: '#999' }} />
            <h3 style={{ fontSize: 18, color: '#111', marginBottom: 8 }}>No orders placed yet</h3>
            <p style={{ fontSize: 13 }}>When you place orders, they will show up here.</p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {orders.map((order, index) => (
              <div 
                key={order.orderId || index} 
                style={{ border: '1px solid #d5d9d9', borderRadius: 8, overflow: 'hidden', background: '#fff' }}
              >
                {/* Order Top Bar */}
                <div style={{ background: '#f0f2f2', padding: '12px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12, fontSize: 12, color: '#565959' }}>
                  <div style={{ display: 'flex', gap: 24 }}>
                    <div>
                      <div style={{ textTransform: 'uppercase' }}>Order Placed</div>
                      <strong style={{ color: '#0f1111' }}>{order.orderDate}</strong>
                    </div>
                    <div>
                      <div style={{ textTransform: 'uppercase' }}>Total</div>
                      <strong style={{ color: '#0f1111' }}>{order.totalFormatted || `$${order.total.toFixed(2)}`}</strong>
                    </div>
                    <div>
                      <div style={{ textTransform: 'uppercase' }}>Ship To</div>
                      <strong style={{ color: '#007185' }}>{order.shippingAddress?.fullName || 'Alex Morgan'}</strong>
                    </div>
                  </div>

                  <div>
                    <div style={{ textTransform: 'uppercase' }}>Order # {order.orderId}</div>
                    <div style={{ color: '#007185', cursor: 'pointer' }}>View order details</div>
                  </div>
                </div>

                {/* Order Body */}
                <div style={{ padding: 18 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                    <span style={{ 
                      display: 'inline-block', 
                      width: 10, 
                      height: 10, 
                      borderRadius: '50%', 
                      background: order.status === 'Delivered' ? '#067d62' : '#e67a00' 
                    }} />
                    <strong style={{ fontSize: 15, color: '#0f1111' }}>
                      {order.estimatedDelivery}
                    </strong>
                    <span style={{ fontSize: 13, color: '#565959' }}>
                      ({order.status})
                    </span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                    {order.items.map((item, itemIdx) => (
                      <div key={itemIdx} style={{ display: 'flex', alignItems: 'center', gap: 16, borderBottom: itemIdx < order.items.length - 1 ? '1px solid #f0f0f0' : 'none', paddingBottom: 10 }}>
                        <img 
                          src={item.product.image} 
                          alt={item.product.title} 
                          style={{ width: 68, height: 68, objectFit: 'contain', background: '#fafafa', borderRadius: 4 }} 
                        />

                        <div style={{ flex: 1 }}>
                          <h4 style={{ fontSize: 14, fontWeight: 600, color: '#007185', lineHeight: 1.3, marginBottom: 4 }}>
                            {item.product.title}
                          </h4>
                          <div style={{ fontSize: 12, color: '#565959' }}>
                            Qty: {item.quantity} · Paid: {item.formattedPriceAtPurchase || `$${item.priceAtPurchase.toFixed(2)}`}
                          </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, minWidth: 150 }}>
                          <button 
                            className="add-to-cart-btn"
                            style={{ fontSize: 12, padding: '6px 12px' }}
                            onClick={() => addToCart(item.product, 1)}
                          >
                            <RotateCcw size={13} style={{ display: 'inline', marginRight: 4 }} />
                            Buy it again
                          </button>
                          <button 
                            className="quick-view-btn"
                            style={{ fontSize: 12, padding: '6px 12px' }}
                            onClick={() => alert(`Tracking package for Order #${order.orderId}: Currently in transit with Amazon Logistics!`)}
                          >
                            Track package
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
