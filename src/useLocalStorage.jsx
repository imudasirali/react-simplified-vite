import { useEffect, useState } from "react";

export function useLocalStorage(storageKey, keyValue) {
  const [key, setKeyValue] = useState(
    localStorage.getItem(storageKey)
      ? JSON.parse(localStorage.getItem(storageKey))
      : keyValue
  );

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(key));
  }, [key, storageKey]);

  return [key, setKeyValue];
}
