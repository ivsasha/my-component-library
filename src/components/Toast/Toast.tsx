import React, { useEffect, useState } from 'react';
import './Toast.css';

export interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info';
  duration?: number;
  isCloseButton?: boolean;
  onClose?: () => void;
}

export const Toast: React.FC<ToastProps> = ({
  message,
  type = 'info',
  duration = 3000,
  isCloseButton = true,
  onClose,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => onClose?.(), 300);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  useEffect(() => {
    setIsVisible(true);
  }, [message, type]);

  if (!isVisible) return null;

  return (
    <div className="toast-container">
      <div className={`toast toast-${type}`}>
        <span className="toast-message">{message}</span>
        {isCloseButton && (
          <button
            className="toast-close"
            onClick={() => {
              setIsVisible(false);
              setTimeout(() => onClose?.(), 300);
            }}
          >
            ✖
          </button>
        )}
        <div
          className="toast-progress"
          style={{ animationDuration: `${duration}ms` }}
        />
      </div>
    </div>
  );
};
