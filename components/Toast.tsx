
import React, { useEffect, useState } from 'react';
import { CheckIcon } from './icons/CheckIcon';
import { XIcon } from './icons/XIcon';

interface ToastProps {
  message: string;
  type: 'success' | 'error';
  onDismiss: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type, onDismiss }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsVisible(false);
      // Allow time for fade-out animation before calling onDismiss
      setTimeout(onDismiss, 300);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, [message, type, onDismiss]);

  const bgColor = type === 'success' ? 'bg-green-500/90' : 'bg-red-500/90';
  const Icon = type === 'success' ? CheckIcon : XIcon;

  return (
    <div
      className={`fixed bottom-5 right-5 flex items-center gap-4 p-4 rounded-lg text-white shadow-lg backdrop-blur-sm border border-white/10 transition-all duration-300 ${bgColor} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
      role="alert"
    >
      <Icon className="w-6 h-6" />
      <p className="font-semibold">{message}</p>
    </div>
  );
};

export default Toast;
