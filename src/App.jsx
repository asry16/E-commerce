import React from 'react';
import { ShopProvider } from './context/ShopContext';
import { Header } from './components/Header';
import { SubNav } from './components/SubNav';
import { SideNavDrawer } from './components/SideNavDrawer';
import { HeroBanner } from './components/HeroBanner';
import { QuadrantGrid } from './components/QuadrantGrid';
import { CatalogSection } from './components/CatalogSection';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { OrderConfirmationModal } from './components/OrderConfirmationModal';
import { OrdersHistoryModal } from './components/OrdersHistoryModal';
import { AddressModal } from './components/AddressModal';
import { CurrencyModal } from './components/CurrencyModal';
import { Toast } from './components/Toast';
import { Footer } from './components/Footer';

function AppContent() {
  return (
    <div className="amazon-app-root">
      <Header />
      <SubNav />
      <SideNavDrawer />

      <main>
        <HeroBanner />
        <QuadrantGrid />
        <CatalogSection />
      </main>

      {/* Modals & Overlays */}
      <ProductDetailModal />
      <CartDrawer />
      <CheckoutModal />
      <OrderConfirmationModal />
      <OrdersHistoryModal />
      <AddressModal />
      <CurrencyModal />
      <Toast />

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ShopProvider>
      <AppContent />
    </ShopProvider>
  );
}
