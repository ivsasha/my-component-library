import React, { useState, useEffect, useRef } from 'react';
import './SidebarMenu.css';

export interface MenuItem {
  label: string;
  children?: MenuItem[];
}

export interface SidebarMenuProps {
  items: MenuItem[];
  isOpen: boolean;
  onClose: () => void;
}

export const SidebarMenu: React.FC<SidebarMenuProps> = ({
  items,
  isOpen,
  onClose,
}) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOpenIndexes([]);
  }, [items]);

  const toggleIndex = (index: number) => {
    setOpenIndexes(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index],
    );
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className="sidebar-overlay" />

      <div className="sidebar-menu" ref={sidebarRef}>
        <div className="sidebar-header">
          <h2 className="sidebar-title">Меню</h2>
          <button className="sidebar-close" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="sidebar-content">
          {items.map((item, index) => (
            <div key={index} className="menu-item">
              <div
                className={`menu-item-header ${
                  openIndexes.includes(index) ? 'active' : ''
                } ${!item.children ? 'no-children' : ''}`}
                onClick={() => item.children && toggleIndex(index)}
              >
                <div className="menu-item-label">{item.label}</div>
                {item.children && (
                  <span
                    className={`menu-item-icon ${
                      openIndexes.includes(index) ? 'expanded' : ''
                    }`}
                  >
                    ▶
                  </span>
                )}
              </div>

              {item.children && openIndexes.includes(index) && (
                <div className="submenu expanded">
                  {item.children.map((sub, subIndex) => (
                    <div key={subIndex} className="submenu-item">
                      {sub.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
