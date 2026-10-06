import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { X, CheckCircle2, Globe, ArrowRight } from 'lucide-react';

export const CurrencyModal = () => {
  const {
    isCurrencyModalOpen,
    setIsCurrencyModalOpen,
    currency,
    switchCurrency,
    INR_RATE
  } = useShop();

  const [selected, setSelected] = useState(currency);

  if (!isCurrencyModalOpen) return null;

  const handleSave = () => {
    switchCurrency(selected);
    setIsCurrencyModalOpen(false);
  };

  return (
    <div className="modal-overlay" onClick={() => setIsCurrencyModalOpen(false)}>
      <div className="product-detail-modal" style={{ maxWidth: 480, padding: 28 }} onClick={(e) => e.stopPropagation()}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20, borderBottom: '1px solid #e7e7e7', paddingBottom: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Globe size={22} color="#007185" />
            <h3 style={{ fontSize: 18, fontWeight: 700 }}>Currency Settings</h3>
          </div>
          <button 
            className="modal-close-btn" 
            style={{ position: 'static' }}
            onClick={() => setIsCurrencyModalOpen(false)}
          >
            <X size={18} />
          </button>
        </div>

        <p style={{ fontSize: 13, color: '#565959', marginBottom: 18, lineHeight: 1.45 }}>
          Select the currency you want to shop with. When shopping in <strong>INR (Indian Rupee)</strong>, prices and order totals will be displayed in <strong>₹ (INR)</strong>.
        </p>

        {/* Currency Options */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 20 }}>
          {/* USD Option */}
          <div 
            className={`address-option-card ${selected === 'USD' ? 'selected' : ''}`}
            onClick={() => setSelected('USD')}
            style={{ padding: 14, alignItems: 'center' }}
          >
            <input 
              type="radio" 
              name="currency_select" 
              checked={selected === 'USD'} 
              onChange={() => setSelected('USD')}
            />
            <span style={{ fontSize: 22, marginRight: 4 }}>🇺🇸</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 700 }}>
                USD - US Dollar ($)
              </div>
              <div style={{ fontSize: 12, color: '#565959' }}>
                Default store currency
              </div>
            </div>
            {selected === 'USD' && <CheckCircle2 size={18} color="#067d62" />}
          </div>

          {/* INR Option */}
          <div 
            className={`address-option-card ${selected === 'INR' ? 'selected' : ''}`}
            onClick={() => setSelected('INR')}
            style={{ padding: 14, alignItems: 'center' }}
          >
            <input 
              type="radio" 
              name="currency_select" 
              checked={selected === 'INR'} 
              onChange={() => setSelected('INR')}
            />
            <span style={{ fontSize: 22, marginRight: 4 }}>🇮🇳</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 700 }}>
                INR - Indian Rupee (₹)
              </div>
              <div style={{ fontSize: 12, color: '#565959' }}>
                Conversion Rate: 1 USD ≈ ₹{INR_RATE.toFixed(2)}
              </div>
            </div>
            {selected === 'INR' && <CheckCircle2 size={18} color="#067d62" />}
          </div>
        </div>

        <div style={{ background: '#f8fafc', padding: 12, borderRadius: 6, fontSize: 12, color: '#475569', marginBottom: 20, border: '1px solid #e2e8f0' }}>
          💡 <strong>Tip:</strong> Switching to <strong>INR</strong> will also update delivery PIN code presets and free Prime shipping threshold (₹499).
        </div>

        <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end' }}>
          <button 
            className="quick-view-btn"
            onClick={() => setIsCurrencyModalOpen(false)}
          >
            Cancel
          </button>
          <button 
            className="add-to-cart-btn"
            style={{ maxWidth: 180 }}
            onClick={handleSave}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};
