import { useEffect, useState } from "react";

type UseStorage = {
  value: string | null;
  updateValue: (newValue: string) => Promise<void>;
};

const useStorage = (storageKey: string): UseStorage => {
  const [value, setValue] = useState<string | null>(null);

  useEffect(() => {
    localStorage.getItem(storageKey);
  }, []);

  const updateValue = async (newValue: string): Promise<void> => {
    try {
      await localStorage.setItem(storageKey, newValue);
      setValue(newValue);
    } catch (err) {
      console.error(err);
    }
  };

  return { value, updateValue };
};

export default useStorage;
