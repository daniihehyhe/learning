import { useState, useEffect } from "react";

// Define a type for the value stored in local storage
type LocalStorageValue<T> = {
  value: T | null;
};

// Define a custom hook for managing local storage
function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [LocalStorageValue<T>, (value: T) => void] {
  // Retrieve the value from local storage, or use the initial value
  const [storedValue, setStoredValue] = useState<LocalStorageValue<T>>(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : { value: initialValue };
  });

  // Update the value in local storage whenever it changes
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue]);

  const updateValue = (value: T) => {
    setStoredValue({ value });
  };

  return [storedValue, updateValue];
}

export default useLocalStorage;
