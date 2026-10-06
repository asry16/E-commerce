import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { X, MapPin } from 'lucide-react';

export const AddressModal = () => {
  const { isAddressModalOpen, setIsAddressModalOpen, deliveryLocation, setDeliveryLocation, showToast } = useShop();
  const [zipInput, setZipInput] = useState(deliveryLocation.zip);
  const [cityInput, setCityInput] = useState(deliveryLocation.city);

  if (!isAddressModalOpen) return null;

  const handlePreset = (city, zip, country) => {
    setCityInput(city);
    setZipInput(zip);
    setDeliveryLocation({ city, zip, country });
    setIsAddressModalOpen(false);
    showToast(`Delivery location updated to ${city}, ${zip}!`, 'info');
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!zipInput.trim() || !cityInput.trim()) return;
    const country = zipInput.trim().length === 6 ? 'India' : 'United States';
    setDeliveryLocation({
      city: cityInput.trim(),
      zip: zipInput.trim(),
      country
    });
    setIsAddressModalOpen(false);
    showToast(`Delivery location updated to ${cityInput}, ${zipInput}!`, 'info');
  };

  return (
    <div className="modal-overlay" onClick={() => setIsAddressModalOpen(false)}>
      <div className="product-detail-modal" style={{ maxWidth: 440, padding: 24 }} onClick={(e) => e.stopPropagation()}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16, borderBottom: '1px solid #e7e7e7', paddingBottom: 12 }}>
          <h3 style={{ fontSize: 17, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 6 }}>
            <MapPin size={18} color="#ff9900" />
            Choose your location
          </h3>
          <button 
            className="modal-close-btn" 
            style={{ position: 'static' }}
            onClick={() => setIsAddressModalOpen(false)}
          >
            <X size={18} />
          </button>
        </div>

        <p style={{ fontSize: 13, color: '#565959', marginBottom: 14 }}>
          Select or enter your city and postal code for delivery estimates.
        </p>

        {/* Quick Presets */}
        <div style={{ marginBottom: 16 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: '#555', marginBottom: 6 }}>Popular Locations:</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            <button 
              type="button" 
              className="quick-view-btn" 
              style={{ fontSize: 11, padding: '4px 10px' }}
              onClick={() => handlePreset('Mumbai', '400001', 'India')}
            >
              🇮🇳 Mumbai 400001
            </button>
            <button 
              type="button" 
              className="quick-view-btn" 
              style={{ fontSize: 11, padding: '4px 10px' }}
              onClick={() => handlePreset('Delhi', '110001', 'India')}
            >
              🇮🇳 Delhi 110001
            </button>
            <button 
              type="button" 
              className="quick-view-btn" 
              style={{ fontSize: 11, padding: '4px 10px' }}
              onClick={() => handlePreset('Bengaluru', '560001', 'India')}
            >
              🇮🇳 Bengaluru 560001
            </button>
            <button 
              type="button" 
              className="quick-view-btn" 
              style={{ fontSize: 11, padding: '4px 10px' }}
              onClick={() => handlePreset('Seattle', '98101', 'United States')}
            >
              🇺🇸 Seattle 98101
            </button>
          </div>
        </div>

        <form onSubmit={handleSave}>
          <div style={{ marginBottom: 14 }}>
            <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 4 }}>
              City
            </label>
            <input 
              type="text" 
              value={cityInput}
              onChange={(e) => setCityInput(e.target.value)}
              className="search-input"
              style={{ border: '1px solid #d5d9d9', borderRadius: 4, height: 38 }}
              placeholder="e.g. Seattle, San Francisco, New York"
              required
            />
          </div>

          <div style={{ marginBottom: 20 }}>
            <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 4 }}>
              US ZIP Code
            </label>
            <input 
              type="text" 
              value={zipInput}
              onChange={(e) => setZipInput(e.target.value)}
              className="search-input"
              style={{ border: '1px solid #d5d9d9', borderRadius: 4, height: 38 }}
              placeholder="e.g. 98101"
              required
            />
          </div>

          <button 
            type="submit" 
            className="add-to-cart-btn"
            style={{ width: '100%', padding: '10px' }}
          >
            Apply Delivery Location
          </button>
        </form>
      </div>
    </div>
  );
};
