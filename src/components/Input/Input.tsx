import React, { useState } from 'react';
import './Input.css';

export interface InputProps {
  type?: 'text' | 'password' | 'number';
  clearable?: boolean;
  value?: string;
  onChange?: (value: string) => void;
}

export const Input: React.FC<InputProps> = ({
  type = 'text',
  clearable = false,
  value = '',
  onChange,
}) => {
  const [internalValue, setInternalValue] = useState(value);
  const [showPassword, setShowPassword] = useState(false);

  React.useEffect(() => {
    setInternalValue(value);
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    setInternalValue(newValue);
    onChange?.(newValue);
  };

  const clearInput = () => {
    setInternalValue('');
    onChange?.('');
  };

  function capitalizeFirstLetter(str: string) {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const togglePassword = () => setShowPassword(s => !s);

  const hasValue = internalValue.length > 0;

  return (
    <div className="input-container">
      <label className="input-label" htmlFor="input-control">
        {capitalizeFirstLetter(type)}
      </label>

      <div className="input-wrapper">
        <input
          id="input-control"
          type={type === 'password' && showPassword ? 'text' : type}
          value={internalValue}
          onChange={handleChange}
          className={`input-field ${type === 'password' || clearable ? 'with-icons' : ''}`}
        />

        {type === 'password' && (
          <button
            type="button"
            onClick={togglePassword}
            className={`input-button password-toggle ${clearable && hasValue ? '' : 'single'}`}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? '🙈' : '👁️'}
          </button>
        )}

        {clearable && hasValue && (
          <button
            type="button"
            onClick={clearInput}
            className="input-button clear-button"
            aria-label="Clear input"
          >
            ❌
          </button>
        )}
      </div>
    </div>
  );
};
