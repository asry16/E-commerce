import React from 'react';
import { useShop } from '../context/ShopContext';
import { CheckCircle2, Info } from 'lucide-react';

export const Toast = () => {
  const { toast } = useShop();

  if (!toast.show) return null;

  return (
    <div className="amazon-toast">
      {toast.type === 'success' ? (
        <CheckCircle2 size={20} color="#067d62" />
      ) : (
        <Info size={20} color="#febd69" />
      )}
      <span style={{ fontSize: 14, fontWeight: 500 }}>{toast.message}</span>
    </div>
  );
};
