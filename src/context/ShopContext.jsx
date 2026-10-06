import React, { createContext, useContext, useState, useEffect } from 'react';
import { PRODUCTS } from '../data/products';

const ShopContext = createContext();

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};

const INITIAL_ORDERS = [
  {
    orderId: "114-8392019-4820184",
    orderDate: "Oct 2, 2026",
    estimatedDelivery: "Delivered Yesterday",
    status: "Delivered",
    shippingAddress: {
      fullName: "Alex Morgan",
      street: "2121 7th Avenue, Apt 4B",
      city: "Seattle",
      state: "WA",
      zip: "98121"
    },
    paymentMethod: "Amazon Prime Rewards Visa (...8842)",
    deliveryMethod: "FREE Prime Two-Day Shipping",
    total: 348.00,
    items: [
      {
        product: PRODUCTS[0],
        quantity: 1,
        priceAtPurchase: 348.00
      }
    ]
  }
];

export const ShopProvider = ({ children }) => {
  // Cart state persisted to localStorage
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('amazon_clone_cart');
      return saved ? JSON.parse(saved) : [
        { product: PRODUCTS[4], quantity: 1 } // pre-populate Kindle Paperwhite for immediate rich cart demo
      ];
    } catch {
      return [{ product: PRODUCTS[4], quantity: 1 }];
    }
  });

  // Orders state persisted to localStorage
  const [orders, setOrders] = useState(() => {
    try {
      const saved = localStorage.getItem('amazon_clone_orders');
      return saved ? JSON.parse(saved) : INITIAL_ORDERS;
    } catch {
      return INITIAL_ORDERS;
    }
  });

  // Currency State ('USD' | 'INR')
  const [currency, setCurrency] = useState(() => {
    try {
      const saved = localStorage.getItem('amazon_clone_currency');
      return saved === 'INR' ? 'INR' : 'USD';
    } catch {
      return 'USD';
    }
  });

  const [isCurrencyModalOpen, setIsCurrencyModalOpen] = useState(false);

  // Delivery Location
  const [deliveryLocation, setDeliveryLocation] = useState(() => {
    try {
      const saved = localStorage.getItem('amazon_clone_location');
      return saved ? JSON.parse(saved) : {
        city: 'Seattle',
        zip: '98101',
        country: 'United States'
      };
    } catch {
      return {
        city: 'Seattle',
        zip: '98101',
        country: 'United States'
      };
    }
  });

  // Search & Filter state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [minRating, setMinRating] = useState(0);
  const [primeOnly, setPrimeOnly] = useState(false);
  const [maxPrice, setMaxPrice] = useState(2500);
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'

  // Modals & UI Triggers
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isOrdersOpen, setIsOrdersOpen] = useState(false);
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [lastPlacedOrder, setLastPlacedOrder] = useState(null);

  // Toast notification
  const [toast, setToast] = useState({ show: false, message: '', type: 'info' });

  useEffect(() => {
    try {
      localStorage.setItem('amazon_clone_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('amazon_clone_orders', JSON.stringify(orders));
    } catch (e) {
      console.error(e);
    }
  }, [orders]);

  useEffect(() => {
    try {
      localStorage.setItem('amazon_clone_currency', currency);
    } catch (e) {
      console.error(e);
    }
  }, [currency]);

  useEffect(() => {
    try {
      localStorage.setItem('amazon_clone_location', JSON.stringify(deliveryLocation));
    } catch (e) {
      console.error(e);
    }
  }, [deliveryLocation]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast(prev => ({ ...prev, show: false }));
    }, 3200);
  };

  const switchCurrency = (newCurrency) => {
    setCurrency(newCurrency);
    if (newCurrency === 'INR') {
      if (deliveryLocation.country === 'United States' && deliveryLocation.city === 'Seattle') {
        setDeliveryLocation({
          city: 'Mumbai',
          zip: '400001',
          country: 'India'
        });
      }
      showToast('Currency switched to Indian Rupee (₹ INR)', 'info');
    } else {
      if (deliveryLocation.country === 'India') {
        setDeliveryLocation({
          city: 'Seattle',
          zip: '98101',
          country: 'United States'
        });
      }
      showToast('Currency switched to US Dollar ($ USD)', 'info');
    }
  };

  // INR conversion rate: 1 USD = 83.5 INR
  const INR_RATE = 83.5;

  const formatPrice = (amountInUSD) => {
    if (amountInUSD === undefined || amountInUSD === null) {
      return { symbol: currency === 'INR' ? '₹' : '$', whole: '0', fraction: '00', formatted: currency === 'INR' ? '₹0' : '$0.00', raw: 0 };
    }

    if (currency === 'INR') {
      const inrValue = Math.round(amountInUSD * INR_RATE);
      return {
        symbol: '₹',
        raw: inrValue,
        whole: inrValue.toLocaleString('en-IN'),
        fraction: '00',
        formatted: `₹${inrValue.toLocaleString('en-IN')}`
      };
    } else {
      const fixed = amountInUSD.toFixed(2);
      const parts = fixed.split('.');
      return {
        symbol: '$',
        raw: amountInUSD,
        whole: parts[0],
        fraction: parts[1],
        formatted: `$${fixed}`
      };
    }
  };

  const addToCart = (product, quantity = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    showToast(`Added "${product.title.slice(0, 32)}..." to Cart!`, 'success');
  };

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
    showToast('Item removed from cart', 'info');
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prev =>
      prev.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartSubtotalUSD = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const cartTotalCount = cart.reduce((count, item) => count + item.quantity, 0);

  // Free shipping threshold: $50 in USD or ₹499 in INR
  const freeShippingThresholdUSD = currency === 'INR' ? (499 / INR_RATE) : 50;
  const freeShippingDifferenceUSD = Math.max(0, freeShippingThresholdUSD - cartSubtotalUSD);

  const placeOrder = (orderDetails) => {
    const orderId = `114-${Math.floor(1000000 + Math.random() * 9000000)}-${Math.floor(1000000 + Math.random() * 9000000)}`;
    const newOrder = {
      orderId,
      orderDate: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      estimatedDelivery: orderDetails.deliveryMethod?.includes('Next-Day') ? "Tomorrow" : "In 2 business days",
      status: "Preparing for Shipment",
      shippingAddress: orderDetails.shippingAddress,
      paymentMethod: orderDetails.paymentMethod,
      deliveryMethod: orderDetails.deliveryMethod,
      currencyUsed: currency,
      totalFormatted: orderDetails.totalFormatted,
      totalUSD: orderDetails.totalUSD,
      items: cart.map(item => ({
        product: item.product,
        quantity: item.quantity,
        priceAtPurchaseUSD: item.product.price,
        formattedPriceAtPurchase: formatPrice(item.product.price).formatted
      }))
    };

    setOrders(prev => [newOrder, ...prev]);
    setLastPlacedOrder(newOrder);
    clearCart();
    setIsCheckoutOpen(false);
    showToast("🎉 Order placed successfully!", "success");
    return newOrder;
  };

  return (
    <ShopContext.Provider
      value={{
        cart,
        orders,
        currency,
        setCurrency,
        switchCurrency,
        INR_RATE,
        formatPrice,
        isCurrencyModalOpen,
        setIsCurrencyModalOpen,
        deliveryLocation,
        setDeliveryLocation,
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        minRating,
        setMinRating,
        primeOnly,
        setPrimeOnly,
        maxPrice,
        setMaxPrice,
        sortBy,
        setSortBy,
        viewMode,
        setViewMode,
        selectedProduct,
        setSelectedProduct,
        isCartOpen,
        setIsCartOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        isOrdersOpen,
        setIsOrdersOpen,
        isAddressModalOpen,
        setIsAddressModalOpen,
        isSideNavOpen,
        setIsSideNavOpen,
        lastPlacedOrder,
        setLastPlacedOrder,
        toast,
        showToast,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartSubtotalUSD,
        cartTotalCount,
        freeShippingThresholdUSD,
        freeShippingDifferenceUSD,
        placeOrder
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
