type persistModeOptions = {
  [key: string]: () => Storage;
};

const PersistMode: persistModeOptions = {
  localStorage: () => localStorage,
  sessionStorage: () => sessionStorage,
};

const getFromStorage = (key: string, type = 'sessionStorage') => {
  try {
    const persist = PersistMode[type]();

    const result = persist.getItem(key) || '';

    return JSON.parse(result);
  } catch (error) {
    return null;
  }
};

const setInStorage = (key: string, value: any, type = 'sessionStorage') => {
  if (!key || !value) {
    return;
  }
  const persist = PersistMode[type]();
  removeFromStorageIfExists(key, type);
  persist.setItem(key, JSON.stringify(value));
};

const removeFromStorageIfExists = (key: string, type = 'sessionStorage') => {
  if (getFromStorage(key, type)) removeFromStorage(key, type);
};

const removeFromStorage = (key: string, type = 'sessionStorage') => {
  const persist = PersistMode[type]();
  persist.removeItem(key);
};

export default {
  getFromStorage,
  setInStorage,
  removeFromStorage,
  removeFromStorageIfExists,
};
