const PersistMode = {
  localStorage: () => localStorage,
  sessionStorage: () => sessionStorage,
};

const getFromStorage = (key, type = 'sessionStorage') => {
  try {
    const persist = PersistMode[type]();
    return JSON.parse(persist.getItem(key));
  } catch (error) {
    return null;
  }
};

const setInStorage = (key, value, type = 'sessionStorage') => {
  if (!key || !value) {
    return;
  }
  const persist = PersistMode[type]();
  removeFromStorageIfExists(key, type);
  persist.setItem(key, JSON.stringify(value));
};

const removeFromStorageIfExists = (key, type = 'sessionStorage') => {
  if (getFromStorage(key, type)) removeFromStorage(key, type);
};

const removeFromStorage = (key, type = 'sessionStorage') => {
  const persist = PersistMode[type]();
  persist.removeItem(key);
};

export default {
  getFromStorage,
  setInStorage,
  removeFromStorage,
  removeFromStorageIfExists,
};
