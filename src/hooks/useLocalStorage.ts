export const useLocalStorage = (key: string, initialValue = {}) => {
  const localData = localStorage.getItem(key);
  return localData ? JSON.parse(localData) : initialValue;
};

export const setToLocalStorage = (key: string, value: any) => {
  return;
};
