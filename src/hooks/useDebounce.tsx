import React, { useState, useEffect } from 'react';

interface IProp {
  value: string;
  delay: number;
}

export const useDebounce = ({ value, delay }: IProp) => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debounceValue;
};
