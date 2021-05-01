import localStorage from "store";

const localStorageUtil = {
  set(key, value) {
    localStorage.set(key, value);
  },

  get(key, defaultValue = "", setDefaultValue = false) {
    if (setDefaultValue) {
      localStorage.set(key, defaultValue);
      return defaultValue;
    }

    return localStorage.get(key) || defaultValue;
  },

  remove(key) {
    localStorage.remove(key);
  },
};

export default localStorageUtil;
