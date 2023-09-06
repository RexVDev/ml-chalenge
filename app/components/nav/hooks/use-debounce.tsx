import { useState, useEffect } from 'react';

export const useDebounce = ({ value, delay}: DebounceType) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const handlerDebounce = setTimeout(() => {
      setDebounceValue(value)
    }, delay);

    return () => {
      clearTimeout(handlerDebounce);
    }
  }, [value, delay]);

  return debounceValue;
}


type DebounceType = {
  value: string;
  delay: number;
}